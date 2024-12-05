# `stackMonitoringMetricExtension` Submodule <a name="`stackMonitoringMetricExtension` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMetricExtension <a name="StackMonitoringMetricExtension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtension(Construct Scope, string Id, StackMonitoringMetricExtensionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig">StackMonitoringMetricExtensionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig">StackMonitoringMetricExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList">PutMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties">PutQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetPublishTrigger">ResetPublishTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricList` <a name="PutMetricList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList"></a>

```csharp
private void PutMetricList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putMetricList.parameter.value"></a>

- *Type:* object

---

##### `PutQueryProperties` <a name="PutQueryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties"></a>

```csharp
private void PutQueryProperties(StackMonitoringMetricExtensionQueryProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putQueryProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts"></a>

```csharp
private void PutTimeouts(StackMonitoringMetricExtensionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPublishTrigger` <a name="ResetPublishTrigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetPublishTrigger"></a>

```csharp
private void ResetPublishTrigger()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMetricExtension.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMetricExtension.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMetricExtension.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMetricExtension.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMetricExtension to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMetricExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMetricExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionMethod">CollectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResources">EnabledOnResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList">StackMonitoringMetricExtensionEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResourcesCount">EnabledOnResourcesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricList">MetricList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList">StackMonitoringMetricExtensionMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryProperties">QueryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceUri">ResourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference">StackMonitoringMetricExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrencesInput">CollectionRecurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricListInput">MetricListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTriggerInput">PublishTriggerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryPropertiesInput">QueryPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrences">CollectionRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTrigger">PublishTrigger</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CollectionMethod`<sup>Required</sup> <a name="CollectionMethod" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionMethod"></a>

```csharp
public string CollectionMethod { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `EnabledOnResources`<sup>Required</sup> <a name="EnabledOnResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResources"></a>

```csharp
public StackMonitoringMetricExtensionEnabledOnResourcesList EnabledOnResources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList">StackMonitoringMetricExtensionEnabledOnResourcesList</a>

---

##### `EnabledOnResourcesCount`<sup>Required</sup> <a name="EnabledOnResourcesCount" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.enabledOnResourcesCount"></a>

```csharp
public double EnabledOnResourcesCount { get; }
```

- *Type:* double

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `MetricList`<sup>Required</sup> <a name="MetricList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricList"></a>

```csharp
public StackMonitoringMetricExtensionMetricListStructList MetricList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList">StackMonitoringMetricExtensionMetricListStructList</a>

---

##### `QueryProperties`<sup>Required</sup> <a name="QueryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryProperties"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesOutputReference QueryProperties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutputReference</a>

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceUri"></a>

```csharp
public string ResourceUri { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeouts"></a>

```csharp
public StackMonitoringMetricExtensionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference">StackMonitoringMetricExtensionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CollectionRecurrencesInput`<sup>Optional</sup> <a name="CollectionRecurrencesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrencesInput"></a>

```csharp
public string CollectionRecurrencesInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricListInput`<sup>Optional</sup> <a name="MetricListInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.metricListInput"></a>

```csharp
public object MetricListInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublishTriggerInput`<sup>Optional</sup> <a name="PublishTriggerInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTriggerInput"></a>

```csharp
public object PublishTriggerInput { get; }
```

- *Type:* object

---

##### `QueryPropertiesInput`<sup>Optional</sup> <a name="QueryPropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.queryPropertiesInput"></a>

```csharp
public StackMonitoringMetricExtensionQueryProperties QueryPropertiesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CollectionRecurrences`<sup>Required</sup> <a name="CollectionRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.collectionRecurrences"></a>

```csharp
public string CollectionRecurrences { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublishTrigger`<sup>Required</sup> <a name="PublishTrigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.publishTrigger"></a>

```csharp
public object PublishTrigger { get; }
```

- *Type:* object

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtension.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMetricExtensionConfig <a name="StackMonitoringMetricExtensionConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CollectionRecurrences,
    string CompartmentId,
    string DisplayName,
    object MetricList,
    string Name,
    StackMonitoringMetricExtensionQueryProperties QueryProperties,
    string ResourceType,
    string Description = null,
    string Id = null,
    object PublishTrigger = null,
    StackMonitoringMetricExtensionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.collectionRecurrences">CollectionRecurrences</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.metricList">MetricList</a></code> | <code>object</code> | metric_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.queryProperties">QueryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.publishTrigger">PublishTrigger</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CollectionRecurrences`<sup>Required</sup> <a name="CollectionRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.collectionRecurrences"></a>

```csharp
public string CollectionRecurrences { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_recurrences StackMonitoringMetricExtension#collection_recurrences}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compartment_id StackMonitoringMetricExtension#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}.

---

##### `MetricList`<sup>Required</sup> <a name="MetricList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.metricList"></a>

```csharp
public object MetricList { get; set; }
```

- *Type:* object

metric_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_list StackMonitoringMetricExtension#metric_list}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

##### `QueryProperties`<sup>Required</sup> <a name="QueryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.queryProperties"></a>

```csharp
public StackMonitoringMetricExtensionQueryProperties QueryProperties { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#query_properties StackMonitoringMetricExtension#query_properties}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#resource_type StackMonitoringMetricExtension#resource_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#description StackMonitoringMetricExtension#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#id StackMonitoringMetricExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublishTrigger`<sup>Optional</sup> <a name="PublishTrigger" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.publishTrigger"></a>

```csharp
public object PublishTrigger { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#publish_trigger StackMonitoringMetricExtension#publish_trigger}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionConfig.property.timeouts"></a>

```csharp
public StackMonitoringMetricExtensionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts">StackMonitoringMetricExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#timeouts StackMonitoringMetricExtension#timeouts}

---

### StackMonitoringMetricExtensionEnabledOnResources <a name="StackMonitoringMetricExtensionEnabledOnResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionEnabledOnResources {

};
```


### StackMonitoringMetricExtensionMetricListStruct <a name="StackMonitoringMetricExtensionMetricListStruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionMetricListStruct {
    string DataType,
    string Name,
    string ComputeExpression = null,
    string DisplayName = null,
    object IsDimension = null,
    object IsHidden = null,
    string MetricCategory = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.dataType">DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#data_type StackMonitoringMetricExtension#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.computeExpression">ComputeExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compute_expression StackMonitoringMetricExtension#compute_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isDimension">IsDimension</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_dimension StackMonitoringMetricExtension#is_dimension}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isHidden">IsHidden</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_hidden StackMonitoringMetricExtension#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.metricCategory">MetricCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_category StackMonitoringMetricExtension#metric_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#unit StackMonitoringMetricExtension#unit}. |

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#data_type StackMonitoringMetricExtension#data_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

##### `ComputeExpression`<sup>Optional</sup> <a name="ComputeExpression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.computeExpression"></a>

```csharp
public string ComputeExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#compute_expression StackMonitoringMetricExtension#compute_expression}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#display_name StackMonitoringMetricExtension#display_name}.

---

##### `IsDimension`<sup>Optional</sup> <a name="IsDimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isDimension"></a>

```csharp
public object IsDimension { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_dimension StackMonitoringMetricExtension#is_dimension}.

---

##### `IsHidden`<sup>Optional</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.isHidden"></a>

```csharp
public object IsHidden { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_hidden StackMonitoringMetricExtension#is_hidden}.

---

##### `MetricCategory`<sup>Optional</sup> <a name="MetricCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.metricCategory"></a>

```csharp
public string MetricCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#metric_category StackMonitoringMetricExtension#metric_category}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStruct.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#unit StackMonitoringMetricExtension#unit}.

---

### StackMonitoringMetricExtensionQueryProperties <a name="StackMonitoringMetricExtensionQueryProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryProperties {
    string CollectionMethod,
    string Arguments = null,
    string AutoRowPrefix = null,
    string Command = null,
    string Delimiter = null,
    string IdentityMetric = null,
    object InParamDetails = null,
    object IsMetricServiceEnabled = null,
    string JmxAttributes = null,
    string ManagedBeanQuery = null,
    StackMonitoringMetricExtensionQueryPropertiesOutParamDetails OutParamDetails = null,
    StackMonitoringMetricExtensionQueryPropertiesScriptDetails ScriptDetails = null,
    StackMonitoringMetricExtensionQueryPropertiesSqlDetails SqlDetails = null,
    string SqlType = null,
    string StartsWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.collectionMethod">CollectionMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_method StackMonitoringMetricExtension#collection_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.arguments">Arguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#arguments StackMonitoringMetricExtension#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.autoRowPrefix">AutoRowPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#auto_row_prefix StackMonitoringMetricExtension#auto_row_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.command">Command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#command StackMonitoringMetricExtension#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.delimiter">Delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delimiter StackMonitoringMetricExtension#delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.identityMetric">IdentityMetric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#identity_metric StackMonitoringMetricExtension#identity_metric}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.inParamDetails">InParamDetails</a></code> | <code>object</code> | in_param_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.isMetricServiceEnabled">IsMetricServiceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_metric_service_enabled StackMonitoringMetricExtension#is_metric_service_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.jmxAttributes">JmxAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#jmx_attributes StackMonitoringMetricExtension#jmx_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.managedBeanQuery">ManagedBeanQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#managed_bean_query StackMonitoringMetricExtension#managed_bean_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.outParamDetails">OutParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | out_param_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.scriptDetails">ScriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | script_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlDetails">SqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | sql_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlType">SqlType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_type StackMonitoringMetricExtension#sql_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.startsWith">StartsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#starts_with StackMonitoringMetricExtension#starts_with}. |

---

##### `CollectionMethod`<sup>Required</sup> <a name="CollectionMethod" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.collectionMethod"></a>

```csharp
public string CollectionMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#collection_method StackMonitoringMetricExtension#collection_method}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.arguments"></a>

```csharp
public string Arguments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#arguments StackMonitoringMetricExtension#arguments}.

---

##### `AutoRowPrefix`<sup>Optional</sup> <a name="AutoRowPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.autoRowPrefix"></a>

```csharp
public string AutoRowPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#auto_row_prefix StackMonitoringMetricExtension#auto_row_prefix}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.command"></a>

```csharp
public string Command { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#command StackMonitoringMetricExtension#command}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delimiter StackMonitoringMetricExtension#delimiter}.

---

##### `IdentityMetric`<sup>Optional</sup> <a name="IdentityMetric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.identityMetric"></a>

```csharp
public string IdentityMetric { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#identity_metric StackMonitoringMetricExtension#identity_metric}.

---

##### `InParamDetails`<sup>Optional</sup> <a name="InParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.inParamDetails"></a>

```csharp
public object InParamDetails { get; set; }
```

- *Type:* object

in_param_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_details StackMonitoringMetricExtension#in_param_details}

---

##### `IsMetricServiceEnabled`<sup>Optional</sup> <a name="IsMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.isMetricServiceEnabled"></a>

```csharp
public object IsMetricServiceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#is_metric_service_enabled StackMonitoringMetricExtension#is_metric_service_enabled}.

---

##### `JmxAttributes`<sup>Optional</sup> <a name="JmxAttributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.jmxAttributes"></a>

```csharp
public string JmxAttributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#jmx_attributes StackMonitoringMetricExtension#jmx_attributes}.

---

##### `ManagedBeanQuery`<sup>Optional</sup> <a name="ManagedBeanQuery" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.managedBeanQuery"></a>

```csharp
public string ManagedBeanQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#managed_bean_query StackMonitoringMetricExtension#managed_bean_query}.

---

##### `OutParamDetails`<sup>Optional</sup> <a name="OutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.outParamDetails"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesOutParamDetails OutParamDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

out_param_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_details StackMonitoringMetricExtension#out_param_details}

---

##### `ScriptDetails`<sup>Optional</sup> <a name="ScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.scriptDetails"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesScriptDetails ScriptDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

script_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_details StackMonitoringMetricExtension#script_details}

---

##### `SqlDetails`<sup>Optional</sup> <a name="SqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlDetails"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesSqlDetails SqlDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

sql_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_details StackMonitoringMetricExtension#sql_details}

---

##### `SqlType`<sup>Optional</sup> <a name="SqlType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.sqlType"></a>

```csharp
public string SqlType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#sql_type StackMonitoringMetricExtension#sql_type}.

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#starts_with StackMonitoringMetricExtension#starts_with}.

---

### StackMonitoringMetricExtensionQueryPropertiesInParamDetails <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesInParamDetails {
    double InParamPosition,
    string InParamValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamPosition">InParamPosition</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_position StackMonitoringMetricExtension#in_param_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamValue">InParamValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_value StackMonitoringMetricExtension#in_param_value}. |

---

##### `InParamPosition`<sup>Required</sup> <a name="InParamPosition" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamPosition"></a>

```csharp
public double InParamPosition { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_position StackMonitoringMetricExtension#in_param_position}.

---

##### `InParamValue`<sup>Required</sup> <a name="InParamValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetails.property.inParamValue"></a>

```csharp
public string InParamValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#in_param_value StackMonitoringMetricExtension#in_param_value}.

---

### StackMonitoringMetricExtensionQueryPropertiesOutParamDetails <a name="StackMonitoringMetricExtensionQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesOutParamDetails {
    double OutParamPosition,
    string OutParamType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamPosition">OutParamPosition</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_position StackMonitoringMetricExtension#out_param_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamType">OutParamType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_type StackMonitoringMetricExtension#out_param_type}. |

---

##### `OutParamPosition`<sup>Required</sup> <a name="OutParamPosition" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamPosition"></a>

```csharp
public double OutParamPosition { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_position StackMonitoringMetricExtension#out_param_position}.

---

##### `OutParamType`<sup>Required</sup> <a name="OutParamType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails.property.outParamType"></a>

```csharp
public string OutParamType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#out_param_type StackMonitoringMetricExtension#out_param_type}.

---

### StackMonitoringMetricExtensionQueryPropertiesScriptDetails <a name="StackMonitoringMetricExtensionQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesScriptDetails {
    string Content,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#name StackMonitoringMetricExtension#name}.

---

### StackMonitoringMetricExtensionQueryPropertiesSqlDetails <a name="StackMonitoringMetricExtensionQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesSqlDetails {
    string Content,
    string ScriptFileName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.scriptFileName">ScriptFileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_file_name StackMonitoringMetricExtension#script_file_name}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#content StackMonitoringMetricExtension#content}.

---

##### `ScriptFileName`<sup>Optional</sup> <a name="ScriptFileName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails.property.scriptFileName"></a>

```csharp
public string ScriptFileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#script_file_name StackMonitoringMetricExtension#script_file_name}.

---

### StackMonitoringMetricExtensionTimeouts <a name="StackMonitoringMetricExtensionTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#create StackMonitoringMetricExtension#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delete StackMonitoringMetricExtension#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#update StackMonitoringMetricExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#create StackMonitoringMetricExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#delete StackMonitoringMetricExtension#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extension#update StackMonitoringMetricExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMetricExtensionEnabledOnResourcesList <a name="StackMonitoringMetricExtensionEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionEnabledOnResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get"></a>

```csharp
private StackMonitoringMetricExtensionEnabledOnResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StackMonitoringMetricExtensionEnabledOnResourcesOutputReference <a name="StackMonitoringMetricExtensionEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionEnabledOnResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources">StackMonitoringMetricExtensionEnabledOnResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMetricExtensionEnabledOnResources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionEnabledOnResources">StackMonitoringMetricExtensionEnabledOnResources</a>

---


### StackMonitoringMetricExtensionMetricListStructList <a name="StackMonitoringMetricExtensionMetricListStructList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionMetricListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get"></a>

```csharp
private StackMonitoringMetricExtensionMetricListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackMonitoringMetricExtensionMetricListStructOutputReference <a name="StackMonitoringMetricExtensionMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionMetricListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetComputeExpression">ResetComputeExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsDimension">ResetIsDimension</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsHidden">ResetIsHidden</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetMetricCategory">ResetMetricCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeExpression` <a name="ResetComputeExpression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetComputeExpression"></a>

```csharp
private void ResetComputeExpression()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetIsDimension` <a name="ResetIsDimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsDimension"></a>

```csharp
private void ResetIsDimension()
```

##### `ResetIsHidden` <a name="ResetIsHidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetIsHidden"></a>

```csharp
private void ResetIsHidden()
```

##### `ResetMetricCategory` <a name="ResetMetricCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetMetricCategory"></a>

```csharp
private void ResetMetricCategory()
```

##### `ResetUnit` <a name="ResetUnit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpressionInput">ComputeExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimensionInput">IsDimensionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHiddenInput">IsHiddenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategoryInput">MetricCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression">ComputeExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension">IsDimension</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden">IsHidden</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory">MetricCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeExpressionInput`<sup>Optional</sup> <a name="ComputeExpressionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpressionInput"></a>

```csharp
public string ComputeExpressionInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IsDimensionInput`<sup>Optional</sup> <a name="IsDimensionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimensionInput"></a>

```csharp
public object IsDimensionInput { get; }
```

- *Type:* object

---

##### `IsHiddenInput`<sup>Optional</sup> <a name="IsHiddenInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHiddenInput"></a>

```csharp
public object IsHiddenInput { get; }
```

- *Type:* object

---

##### `MetricCategoryInput`<sup>Optional</sup> <a name="MetricCategoryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategoryInput"></a>

```csharp
public string MetricCategoryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ComputeExpression`<sup>Required</sup> <a name="ComputeExpression" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression"></a>

```csharp
public string ComputeExpression { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsDimension`<sup>Required</sup> <a name="IsDimension" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension"></a>

```csharp
public object IsDimension { get; }
```

- *Type:* object

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden"></a>

```csharp
public object IsHidden { get; }
```

- *Type:* object

---

##### `MetricCategory`<sup>Required</sup> <a name="MetricCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory"></a>

```csharp
public string MetricCategory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get"></a>

```csharp
private StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPositionInput">InParamPositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValueInput">InParamValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">InParamPosition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue">InParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InParamPositionInput`<sup>Optional</sup> <a name="InParamPositionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPositionInput"></a>

```csharp
public double InParamPositionInput { get; }
```

- *Type:* double

---

##### `InParamValueInput`<sup>Optional</sup> <a name="InParamValueInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValueInput"></a>

```csharp
public string InParamValueInput { get; }
```

- *Type:* string

---

##### `InParamPosition`<sup>Required</sup> <a name="InParamPosition" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```csharp
public double InParamPosition { get; }
```

- *Type:* double

---

##### `InParamValue`<sup>Required</sup> <a name="InParamValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```csharp
public string InParamValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPositionInput">OutParamPositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamTypeInput">OutParamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">OutParamPosition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType">OutParamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutParamPositionInput`<sup>Optional</sup> <a name="OutParamPositionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPositionInput"></a>

```csharp
public double OutParamPositionInput { get; }
```

- *Type:* double

---

##### `OutParamTypeInput`<sup>Optional</sup> <a name="OutParamTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamTypeInput"></a>

```csharp
public string OutParamTypeInput { get; }
```

- *Type:* string

---

##### `OutParamPosition`<sup>Required</sup> <a name="OutParamPosition" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```csharp
public double OutParamPosition { get; }
```

- *Type:* double

---

##### `OutParamType`<sup>Required</sup> <a name="OutParamType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```csharp
public string OutParamType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesOutParamDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---


### StackMonitoringMetricExtensionQueryPropertiesOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails">PutInParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails">PutOutParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails">PutScriptDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails">PutSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetAutoRowPrefix">ResetAutoRowPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIdentityMetric">ResetIdentityMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetInParamDetails">ResetInParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIsMetricServiceEnabled">ResetIsMetricServiceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetJmxAttributes">ResetJmxAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetManagedBeanQuery">ResetManagedBeanQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetOutParamDetails">ResetOutParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetScriptDetails">ResetScriptDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlDetails">ResetSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlType">ResetSqlType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInParamDetails` <a name="PutInParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails"></a>

```csharp
private void PutInParamDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putInParamDetails.parameter.value"></a>

- *Type:* object

---

##### `PutOutParamDetails` <a name="PutOutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails"></a>

```csharp
private void PutOutParamDetails(StackMonitoringMetricExtensionQueryPropertiesOutParamDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putOutParamDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---

##### `PutScriptDetails` <a name="PutScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails"></a>

```csharp
private void PutScriptDetails(StackMonitoringMetricExtensionQueryPropertiesScriptDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putScriptDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---

##### `PutSqlDetails` <a name="PutSqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails"></a>

```csharp
private void PutSqlDetails(StackMonitoringMetricExtensionQueryPropertiesSqlDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.putSqlDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---

##### `ResetArguments` <a name="ResetArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetAutoRowPrefix` <a name="ResetAutoRowPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetAutoRowPrefix"></a>

```csharp
private void ResetAutoRowPrefix()
```

##### `ResetCommand` <a name="ResetCommand" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetIdentityMetric` <a name="ResetIdentityMetric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIdentityMetric"></a>

```csharp
private void ResetIdentityMetric()
```

##### `ResetInParamDetails` <a name="ResetInParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetInParamDetails"></a>

```csharp
private void ResetInParamDetails()
```

##### `ResetIsMetricServiceEnabled` <a name="ResetIsMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetIsMetricServiceEnabled"></a>

```csharp
private void ResetIsMetricServiceEnabled()
```

##### `ResetJmxAttributes` <a name="ResetJmxAttributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetJmxAttributes"></a>

```csharp
private void ResetJmxAttributes()
```

##### `ResetManagedBeanQuery` <a name="ResetManagedBeanQuery" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetManagedBeanQuery"></a>

```csharp
private void ResetManagedBeanQuery()
```

##### `ResetOutParamDetails` <a name="ResetOutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetOutParamDetails"></a>

```csharp
private void ResetOutParamDetails()
```

##### `ResetScriptDetails` <a name="ResetScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetScriptDetails"></a>

```csharp
private void ResetScriptDetails()
```

##### `ResetSqlDetails` <a name="ResetSqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlDetails"></a>

```csharp
private void ResetSqlDetails()
```

##### `ResetSqlType` <a name="ResetSqlType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetSqlType"></a>

```csharp
private void ResetSqlType()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails">InParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails">OutParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails">ScriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails">SqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefixInput">AutoRowPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethodInput">CollectionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.commandInput">CommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetricInput">IdentityMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetailsInput">InParamDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabledInput">IsMetricServiceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributesInput">JmxAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQueryInput">ManagedBeanQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetailsInput">OutParamDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetailsInput">ScriptDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetailsInput">SqlDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlTypeInput">SqlTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments">Arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix">AutoRowPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod">CollectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command">Command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric">IdentityMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled">IsMetricServiceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes">JmxAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery">ManagedBeanQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType">SqlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InParamDetails`<sup>Required</sup> <a name="InParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList InParamDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">StackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a>

---

##### `OutParamDetails`<sup>Required</sup> <a name="OutParamDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference OutParamDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference</a>

---

##### `ScriptDetails`<sup>Required</sup> <a name="ScriptDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference ScriptDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference</a>

---

##### `SqlDetails`<sup>Required</sup> <a name="SqlDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference SqlDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference">StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.argumentsInput"></a>

```csharp
public string ArgumentsInput { get; }
```

- *Type:* string

---

##### `AutoRowPrefixInput`<sup>Optional</sup> <a name="AutoRowPrefixInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefixInput"></a>

```csharp
public string AutoRowPrefixInput { get; }
```

- *Type:* string

---

##### `CollectionMethodInput`<sup>Optional</sup> <a name="CollectionMethodInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethodInput"></a>

```csharp
public string CollectionMethodInput { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.commandInput"></a>

```csharp
public string CommandInput { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `IdentityMetricInput`<sup>Optional</sup> <a name="IdentityMetricInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetricInput"></a>

```csharp
public string IdentityMetricInput { get; }
```

- *Type:* string

---

##### `InParamDetailsInput`<sup>Optional</sup> <a name="InParamDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetailsInput"></a>

```csharp
public object InParamDetailsInput { get; }
```

- *Type:* object

---

##### `IsMetricServiceEnabledInput`<sup>Optional</sup> <a name="IsMetricServiceEnabledInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabledInput"></a>

```csharp
public object IsMetricServiceEnabledInput { get; }
```

- *Type:* object

---

##### `JmxAttributesInput`<sup>Optional</sup> <a name="JmxAttributesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributesInput"></a>

```csharp
public string JmxAttributesInput { get; }
```

- *Type:* string

---

##### `ManagedBeanQueryInput`<sup>Optional</sup> <a name="ManagedBeanQueryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQueryInput"></a>

```csharp
public string ManagedBeanQueryInput { get; }
```

- *Type:* string

---

##### `OutParamDetailsInput`<sup>Optional</sup> <a name="OutParamDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetailsInput"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesOutParamDetails OutParamDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutParamDetails">StackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---

##### `ScriptDetailsInput`<sup>Optional</sup> <a name="ScriptDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetailsInput"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesScriptDetails ScriptDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---

##### `SqlDetailsInput`<sup>Optional</sup> <a name="SqlDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetailsInput"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesSqlDetails SqlDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---

##### `SqlTypeInput`<sup>Optional</sup> <a name="SqlTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlTypeInput"></a>

```csharp
public string SqlTypeInput { get; }
```

- *Type:* string

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments"></a>

```csharp
public string Arguments { get; }
```

- *Type:* string

---

##### `AutoRowPrefix`<sup>Required</sup> <a name="AutoRowPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```csharp
public string AutoRowPrefix { get; }
```

- *Type:* string

---

##### `CollectionMethod`<sup>Required</sup> <a name="CollectionMethod" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod"></a>

```csharp
public string CollectionMethod { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command"></a>

```csharp
public string Command { get; }
```

- *Type:* string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `IdentityMetric`<sup>Required</sup> <a name="IdentityMetric" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric"></a>

```csharp
public string IdentityMetric { get; }
```

- *Type:* string

---

##### `IsMetricServiceEnabled`<sup>Required</sup> <a name="IsMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```csharp
public object IsMetricServiceEnabled { get; }
```

- *Type:* object

---

##### `JmxAttributes`<sup>Required</sup> <a name="JmxAttributes" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes"></a>

```csharp
public string JmxAttributes { get; }
```

- *Type:* string

---

##### `ManagedBeanQuery`<sup>Required</sup> <a name="ManagedBeanQuery" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```csharp
public string ManagedBeanQuery { get; }
```

- *Type:* string

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType"></a>

```csharp
public string SqlType { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMetricExtensionQueryProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryProperties">StackMonitoringMetricExtensionQueryProperties</a>

---


### StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesScriptDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesScriptDetails">StackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---


### StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference <a name="StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resetScriptFileName">ResetScriptFileName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScriptFileName` <a name="ResetScriptFileName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resetScriptFileName"></a>

```csharp
private void ResetScriptFileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileNameInput">ScriptFileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">ScriptFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ScriptFileNameInput`<sup>Optional</sup> <a name="ScriptFileNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileNameInput"></a>

```csharp
public string ScriptFileNameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ScriptFileName`<sup>Required</sup> <a name="ScriptFileName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```csharp
public string ScriptFileName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMetricExtensionQueryPropertiesSqlDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionQueryPropertiesSqlDetails">StackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---


### StackMonitoringMetricExtensionTimeoutsOutputReference <a name="StackMonitoringMetricExtensionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMetricExtensionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtension.StackMonitoringMetricExtensionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



