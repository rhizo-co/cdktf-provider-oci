# `stackMonitoringMonitoredResourceTask` Submodule <a name="`stackMonitoringMonitoredResourceTask` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourceTask <a name="StackMonitoringMonitoredResourceTask" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTask(Construct Scope, string Id, StackMonitoringMonitoredResourceTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig">StackMonitoringMonitoredResourceTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig">StackMonitoringMonitoredResourceTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails">PutTaskDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTaskDetails` <a name="PutTaskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails"></a>

```csharp
private void PutTaskDetails(StackMonitoringMonitoredResourceTaskTaskDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts"></a>

```csharp
private void PutTimeouts(StackMonitoringMonitoredResourceTaskTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourceTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourceTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourceTask.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourceTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMonitoredResourceTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMonitoredResourceTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourceTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetails">TaskDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference">StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference">StackMonitoringMonitoredResourceTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.workRequestIds">WorkRequestIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetailsInput">TaskDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TaskDetails`<sup>Required</sup> <a name="TaskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetails"></a>

```csharp
public StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference TaskDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference">StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference</a>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeouts"></a>

```csharp
public StackMonitoringMonitoredResourceTaskTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference">StackMonitoringMonitoredResourceTaskTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `WorkRequestIds`<sup>Required</sup> <a name="WorkRequestIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.workRequestIds"></a>

```csharp
public string[] WorkRequestIds { get; }
```

- *Type:* string[]

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TaskDetailsInput`<sup>Optional</sup> <a name="TaskDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetailsInput"></a>

```csharp
public StackMonitoringMonitoredResourceTaskTaskDetails TaskDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourceTaskConfig <a name="StackMonitoringMonitoredResourceTaskConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTaskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    StackMonitoringMonitoredResourceTaskTaskDetails TaskDetails,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string Name = null,
    StackMonitoringMonitoredResourceTaskTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.taskDetails">TaskDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | task_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}.

---

##### `TaskDetails`<sup>Required</sup> <a name="TaskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.taskDetails"></a>

```csharp
public StackMonitoringMonitoredResourceTaskTaskDetails TaskDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

task_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#task_details StackMonitoringMonitoredResourceTask#task_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.timeouts"></a>

```csharp
public StackMonitoringMonitoredResourceTaskTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#timeouts StackMonitoringMonitoredResourceTask#timeouts}

---

### StackMonitoringMonitoredResourceTaskTaskDetails <a name="StackMonitoringMonitoredResourceTaskTaskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTaskTaskDetails {
    string Namespace,
    string Source,
    string Type,
    double AvailabilityProxyMetricCollectionInterval = null,
    string[] AvailabilityProxyMetrics = null,
    string ConsolePathPrefix = null,
    string ExternalIdMapping = null,
    string[] LifecycleStatusMappingsForUpStatus = null,
    string ResourceGroup = null,
    string ResourceNameFilter = null,
    string ResourceNameMapping = null,
    string ResourceTypeFilter = null,
    string ResourceTypeMapping = null,
    string ServiceBaseUrl = null,
    object ShouldUseMetricsFlowForStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetricCollectionInterval">AvailabilityProxyMetricCollectionInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetrics">AvailabilityProxyMetrics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.consolePathPrefix">ConsolePathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.externalIdMapping">ExternalIdMapping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.lifecycleStatusMappingsForUpStatus">LifecycleStatusMappingsForUpStatus</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameFilter">ResourceNameFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameMapping">ResourceNameMapping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeFilter">ResourceTypeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeMapping">ResourceTypeMapping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.serviceBaseUrl">ServiceBaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.shouldUseMetricsFlowForStatus">ShouldUseMetricsFlowForStatus</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}.

---

##### `AvailabilityProxyMetricCollectionInterval`<sup>Optional</sup> <a name="AvailabilityProxyMetricCollectionInterval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetricCollectionInterval"></a>

```csharp
public double AvailabilityProxyMetricCollectionInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}.

---

##### `AvailabilityProxyMetrics`<sup>Optional</sup> <a name="AvailabilityProxyMetrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetrics"></a>

```csharp
public string[] AvailabilityProxyMetrics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}.

---

##### `ConsolePathPrefix`<sup>Optional</sup> <a name="ConsolePathPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.consolePathPrefix"></a>

```csharp
public string ConsolePathPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}.

---

##### `ExternalIdMapping`<sup>Optional</sup> <a name="ExternalIdMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.externalIdMapping"></a>

```csharp
public string ExternalIdMapping { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}.

---

##### `LifecycleStatusMappingsForUpStatus`<sup>Optional</sup> <a name="LifecycleStatusMappingsForUpStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.lifecycleStatusMappingsForUpStatus"></a>

```csharp
public string[] LifecycleStatusMappingsForUpStatus { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}.

---

##### `ResourceNameFilter`<sup>Optional</sup> <a name="ResourceNameFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameFilter"></a>

```csharp
public string ResourceNameFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}.

---

##### `ResourceNameMapping`<sup>Optional</sup> <a name="ResourceNameMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameMapping"></a>

```csharp
public string ResourceNameMapping { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}.

---

##### `ResourceTypeFilter`<sup>Optional</sup> <a name="ResourceTypeFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeFilter"></a>

```csharp
public string ResourceTypeFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}.

---

##### `ResourceTypeMapping`<sup>Optional</sup> <a name="ResourceTypeMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeMapping"></a>

```csharp
public string ResourceTypeMapping { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}.

---

##### `ServiceBaseUrl`<sup>Optional</sup> <a name="ServiceBaseUrl" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.serviceBaseUrl"></a>

```csharp
public string ServiceBaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}.

---

##### `ShouldUseMetricsFlowForStatus`<sup>Optional</sup> <a name="ShouldUseMetricsFlowForStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.shouldUseMetricsFlowForStatus"></a>

```csharp
public object ShouldUseMetricsFlowForStatus { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}.

---

### StackMonitoringMonitoredResourceTaskTimeouts <a name="StackMonitoringMonitoredResourceTaskTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTaskTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference <a name="StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetricCollectionInterval">ResetAvailabilityProxyMetricCollectionInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetrics">ResetAvailabilityProxyMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetConsolePathPrefix">ResetConsolePathPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetExternalIdMapping">ResetExternalIdMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetLifecycleStatusMappingsForUpStatus">ResetLifecycleStatusMappingsForUpStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameFilter">ResetResourceNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameMapping">ResetResourceNameMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeFilter">ResetResourceTypeFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeMapping">ResetResourceTypeMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetServiceBaseUrl">ResetServiceBaseUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetShouldUseMetricsFlowForStatus">ResetShouldUseMetricsFlowForStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityProxyMetricCollectionInterval` <a name="ResetAvailabilityProxyMetricCollectionInterval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetricCollectionInterval"></a>

```csharp
private void ResetAvailabilityProxyMetricCollectionInterval()
```

##### `ResetAvailabilityProxyMetrics` <a name="ResetAvailabilityProxyMetrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetrics"></a>

```csharp
private void ResetAvailabilityProxyMetrics()
```

##### `ResetConsolePathPrefix` <a name="ResetConsolePathPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetConsolePathPrefix"></a>

```csharp
private void ResetConsolePathPrefix()
```

##### `ResetExternalIdMapping` <a name="ResetExternalIdMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetExternalIdMapping"></a>

```csharp
private void ResetExternalIdMapping()
```

##### `ResetLifecycleStatusMappingsForUpStatus` <a name="ResetLifecycleStatusMappingsForUpStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetLifecycleStatusMappingsForUpStatus"></a>

```csharp
private void ResetLifecycleStatusMappingsForUpStatus()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceGroup"></a>

```csharp
private void ResetResourceGroup()
```

##### `ResetResourceNameFilter` <a name="ResetResourceNameFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameFilter"></a>

```csharp
private void ResetResourceNameFilter()
```

##### `ResetResourceNameMapping` <a name="ResetResourceNameMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameMapping"></a>

```csharp
private void ResetResourceNameMapping()
```

##### `ResetResourceTypeFilter` <a name="ResetResourceTypeFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeFilter"></a>

```csharp
private void ResetResourceTypeFilter()
```

##### `ResetResourceTypeMapping` <a name="ResetResourceTypeMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeMapping"></a>

```csharp
private void ResetResourceTypeMapping()
```

##### `ResetServiceBaseUrl` <a name="ResetServiceBaseUrl" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetServiceBaseUrl"></a>

```csharp
private void ResetServiceBaseUrl()
```

##### `ResetShouldUseMetricsFlowForStatus` <a name="ResetShouldUseMetricsFlowForStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetShouldUseMetricsFlowForStatus"></a>

```csharp
private void ResetShouldUseMetricsFlowForStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionIntervalInput">AvailabilityProxyMetricCollectionIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricsInput">AvailabilityProxyMetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefixInput">ConsolePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMappingInput">ExternalIdMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatusInput">LifecycleStatusMappingsForUpStatusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilterInput">ResourceNameFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMappingInput">ResourceNameMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilterInput">ResourceTypeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMappingInput">ResourceTypeMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrlInput">ServiceBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatusInput">ShouldUseMetricsFlowForStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval">AvailabilityProxyMetricCollectionInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics">AvailabilityProxyMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix">ConsolePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping">ExternalIdMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus">LifecycleStatusMappingsForUpStatus</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter">ResourceNameFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping">ResourceNameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter">ResourceTypeFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping">ResourceTypeMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl">ServiceBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus">ShouldUseMetricsFlowForStatus</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityProxyMetricCollectionIntervalInput`<sup>Optional</sup> <a name="AvailabilityProxyMetricCollectionIntervalInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionIntervalInput"></a>

```csharp
public double AvailabilityProxyMetricCollectionIntervalInput { get; }
```

- *Type:* double

---

##### `AvailabilityProxyMetricsInput`<sup>Optional</sup> <a name="AvailabilityProxyMetricsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricsInput"></a>

```csharp
public string[] AvailabilityProxyMetricsInput { get; }
```

- *Type:* string[]

---

##### `ConsolePathPrefixInput`<sup>Optional</sup> <a name="ConsolePathPrefixInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefixInput"></a>

```csharp
public string ConsolePathPrefixInput { get; }
```

- *Type:* string

---

##### `ExternalIdMappingInput`<sup>Optional</sup> <a name="ExternalIdMappingInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMappingInput"></a>

```csharp
public string ExternalIdMappingInput { get; }
```

- *Type:* string

---

##### `LifecycleStatusMappingsForUpStatusInput`<sup>Optional</sup> <a name="LifecycleStatusMappingsForUpStatusInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatusInput"></a>

```csharp
public string[] LifecycleStatusMappingsForUpStatusInput { get; }
```

- *Type:* string[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroupInput"></a>

```csharp
public string ResourceGroupInput { get; }
```

- *Type:* string

---

##### `ResourceNameFilterInput`<sup>Optional</sup> <a name="ResourceNameFilterInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilterInput"></a>

```csharp
public string ResourceNameFilterInput { get; }
```

- *Type:* string

---

##### `ResourceNameMappingInput`<sup>Optional</sup> <a name="ResourceNameMappingInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMappingInput"></a>

```csharp
public string ResourceNameMappingInput { get; }
```

- *Type:* string

---

##### `ResourceTypeFilterInput`<sup>Optional</sup> <a name="ResourceTypeFilterInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilterInput"></a>

```csharp
public string ResourceTypeFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeMappingInput`<sup>Optional</sup> <a name="ResourceTypeMappingInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMappingInput"></a>

```csharp
public string ResourceTypeMappingInput { get; }
```

- *Type:* string

---

##### `ServiceBaseUrlInput`<sup>Optional</sup> <a name="ServiceBaseUrlInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrlInput"></a>

```csharp
public string ServiceBaseUrlInput { get; }
```

- *Type:* string

---

##### `ShouldUseMetricsFlowForStatusInput`<sup>Optional</sup> <a name="ShouldUseMetricsFlowForStatusInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatusInput"></a>

```csharp
public object ShouldUseMetricsFlowForStatusInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AvailabilityProxyMetricCollectionInterval`<sup>Required</sup> <a name="AvailabilityProxyMetricCollectionInterval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval"></a>

```csharp
public double AvailabilityProxyMetricCollectionInterval { get; }
```

- *Type:* double

---

##### `AvailabilityProxyMetrics`<sup>Required</sup> <a name="AvailabilityProxyMetrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics"></a>

```csharp
public string[] AvailabilityProxyMetrics { get; }
```

- *Type:* string[]

---

##### `ConsolePathPrefix`<sup>Required</sup> <a name="ConsolePathPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix"></a>

```csharp
public string ConsolePathPrefix { get; }
```

- *Type:* string

---

##### `ExternalIdMapping`<sup>Required</sup> <a name="ExternalIdMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping"></a>

```csharp
public string ExternalIdMapping { get; }
```

- *Type:* string

---

##### `LifecycleStatusMappingsForUpStatus`<sup>Required</sup> <a name="LifecycleStatusMappingsForUpStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus"></a>

```csharp
public string[] LifecycleStatusMappingsForUpStatus { get; }
```

- *Type:* string[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; }
```

- *Type:* string

---

##### `ResourceNameFilter`<sup>Required</sup> <a name="ResourceNameFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter"></a>

```csharp
public string ResourceNameFilter { get; }
```

- *Type:* string

---

##### `ResourceNameMapping`<sup>Required</sup> <a name="ResourceNameMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping"></a>

```csharp
public string ResourceNameMapping { get; }
```

- *Type:* string

---

##### `ResourceTypeFilter`<sup>Required</sup> <a name="ResourceTypeFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter"></a>

```csharp
public string ResourceTypeFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeMapping`<sup>Required</sup> <a name="ResourceTypeMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping"></a>

```csharp
public string ResourceTypeMapping { get; }
```

- *Type:* string

---

##### `ServiceBaseUrl`<sup>Required</sup> <a name="ServiceBaseUrl" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl"></a>

```csharp
public string ServiceBaseUrl { get; }
```

- *Type:* string

---

##### `ShouldUseMetricsFlowForStatus`<sup>Required</sup> <a name="ShouldUseMetricsFlowForStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus"></a>

```csharp
public object ShouldUseMetricsFlowForStatus { get; }
```

- *Type:* object

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMonitoredResourceTaskTaskDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

---


### StackMonitoringMonitoredResourceTaskTimeoutsOutputReference <a name="StackMonitoringMonitoredResourceTaskTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTaskTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



