# `mediaServicesMediaWorkflow` Submodule <a name="`mediaServicesMediaWorkflow` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesMediaWorkflow <a name="MediaServicesMediaWorkflow" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow oci_media_services_media_workflow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflow(Construct Scope, string Id, MediaServicesMediaWorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig">MediaServicesMediaWorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig">MediaServicesMediaWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetMediaWorkflowConfigurationIds">ResetMediaWorkflowConfigurationIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTasks">ResetTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutTasks` <a name="PutTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks"></a>

```csharp
private void PutTasks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts"></a>

```csharp
private void PutTimeouts(MediaServicesMediaWorkflowTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetIsLockOverride"></a>

```csharp
private void ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetMediaWorkflowConfigurationIds` <a name="ResetMediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetMediaWorkflowConfigurationIds"></a>

```csharp
private void ResetMediaWorkflowConfigurationIds()
```

##### `ResetParameters` <a name="ResetParameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTasks` <a name="ResetTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTasks"></a>

```csharp
private void ResetTasks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesMediaWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MediaServicesMediaWorkflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MediaServicesMediaWorkflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MediaServicesMediaWorkflow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MediaServicesMediaWorkflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MediaServicesMediaWorkflow resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaServicesMediaWorkflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaServicesMediaWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesMediaWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList">MediaServicesMediaWorkflowLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasks">Tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList">MediaServicesMediaWorkflowTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference">MediaServicesMediaWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIdsInput">MediaWorkflowConfigurationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasksInput">TasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIds">MediaWorkflowConfigurationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locks"></a>

```csharp
public MediaServicesMediaWorkflowLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList">MediaServicesMediaWorkflowLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasks"></a>

```csharp
public MediaServicesMediaWorkflowTasksList Tasks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList">MediaServicesMediaWorkflowTasksList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeouts"></a>

```csharp
public MediaServicesMediaWorkflowTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference">MediaServicesMediaWorkflowTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverrideInput"></a>

```csharp
public object IsLockOverrideInput { get; }
```

- *Type:* object

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `MediaWorkflowConfigurationIdsInput`<sup>Optional</sup> <a name="MediaWorkflowConfigurationIdsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIdsInput"></a>

```csharp
public string[] MediaWorkflowConfigurationIdsInput { get; }
```

- *Type:* string[]

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasksInput"></a>

```csharp
public object TasksInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; }
```

- *Type:* object

---

##### `MediaWorkflowConfigurationIds`<sup>Required</sup> <a name="MediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIds"></a>

```csharp
public string[] MediaWorkflowConfigurationIds { get; }
```

- *Type:* string[]

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesMediaWorkflowConfig <a name="MediaServicesMediaWorkflowConfig" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsLockOverride = null,
    object Locks = null,
    string[] MediaWorkflowConfigurationIds = null,
    string Parameters = null,
    object Tasks = null,
    MediaServicesMediaWorkflowTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.mediaWorkflowConfigurationIds">MediaWorkflowConfigurationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.tasks">Tasks</a></code> | <code>object</code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#locks MediaServicesMediaWorkflow#locks}

---

##### `MediaWorkflowConfigurationIds`<sup>Optional</sup> <a name="MediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.mediaWorkflowConfigurationIds"></a>

```csharp
public string[] MediaWorkflowConfigurationIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.tasks"></a>

```csharp
public object Tasks { get; set; }
```

- *Type:* object

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#tasks MediaServicesMediaWorkflow#tasks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.timeouts"></a>

```csharp
public MediaServicesMediaWorkflowTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#timeouts MediaServicesMediaWorkflow#timeouts}

---

### MediaServicesMediaWorkflowLocks <a name="MediaServicesMediaWorkflowLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowLocks {
    string CompartmentId,
    string Type,
    string Message = null,
    string RelatedResourceId = null,
    string TimeCreated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#message MediaServicesMediaWorkflow#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#related_resource_id MediaServicesMediaWorkflow#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#time_created MediaServicesMediaWorkflow#time_created}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#message MediaServicesMediaWorkflow#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#related_resource_id MediaServicesMediaWorkflow#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#time_created MediaServicesMediaWorkflow#time_created}.

---

### MediaServicesMediaWorkflowTasks <a name="MediaServicesMediaWorkflowTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowTasks {
    string Key,
    string Parameters,
    string Type,
    string Version,
    string EnableParameterReference = null,
    System.Collections.Generic.IDictionary<string, string> EnableWhenReferencedParameterEquals = null,
    string[] Prerequisites = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#key MediaServicesMediaWorkflow#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#version MediaServicesMediaWorkflow#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableParameterReference">EnableParameterReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_parameter_reference MediaServicesMediaWorkflow#enable_parameter_reference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableWhenReferencedParameterEquals">EnableWhenReferencedParameterEquals</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_when_referenced_parameter_equals MediaServicesMediaWorkflow#enable_when_referenced_parameter_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.prerequisites">Prerequisites</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#prerequisites MediaServicesMediaWorkflow#prerequisites}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#key MediaServicesMediaWorkflow#key}.

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#version MediaServicesMediaWorkflow#version}.

---

##### `EnableParameterReference`<sup>Optional</sup> <a name="EnableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableParameterReference"></a>

```csharp
public string EnableParameterReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_parameter_reference MediaServicesMediaWorkflow#enable_parameter_reference}.

---

##### `EnableWhenReferencedParameterEquals`<sup>Optional</sup> <a name="EnableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableWhenReferencedParameterEquals"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnableWhenReferencedParameterEquals { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_when_referenced_parameter_equals MediaServicesMediaWorkflow#enable_when_referenced_parameter_equals}.

---

##### `Prerequisites`<sup>Optional</sup> <a name="Prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.prerequisites"></a>

```csharp
public string[] Prerequisites { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#prerequisites MediaServicesMediaWorkflow#prerequisites}.

---

### MediaServicesMediaWorkflowTimeouts <a name="MediaServicesMediaWorkflowTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesMediaWorkflowLocksList <a name="MediaServicesMediaWorkflowLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get"></a>

```csharp
private MediaServicesMediaWorkflowLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesMediaWorkflowLocksOutputReference <a name="MediaServicesMediaWorkflowLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetRelatedResourceId"></a>

```csharp
private void ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceIdInput"></a>

```csharp
public string RelatedResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesMediaWorkflowTasksList <a name="MediaServicesMediaWorkflowTasksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get"></a>

```csharp
private MediaServicesMediaWorkflowTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesMediaWorkflowTasksOutputReference <a name="MediaServicesMediaWorkflowTasksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableParameterReference">ResetEnableParameterReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableWhenReferencedParameterEquals">ResetEnableWhenReferencedParameterEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetPrerequisites">ResetPrerequisites</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableParameterReference` <a name="ResetEnableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableParameterReference"></a>

```csharp
private void ResetEnableParameterReference()
```

##### `ResetEnableWhenReferencedParameterEquals` <a name="ResetEnableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableWhenReferencedParameterEquals"></a>

```csharp
private void ResetEnableWhenReferencedParameterEquals()
```

##### `ResetPrerequisites` <a name="ResetPrerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetPrerequisites"></a>

```csharp
private void ResetPrerequisites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReferenceInput">EnableParameterReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEqualsInput">EnableWhenReferencedParameterEqualsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisitesInput">PrerequisitesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReference">EnableParameterReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEquals">EnableWhenReferencedParameterEquals</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisites">Prerequisites</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableParameterReferenceInput`<sup>Optional</sup> <a name="EnableParameterReferenceInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReferenceInput"></a>

```csharp
public string EnableParameterReferenceInput { get; }
```

- *Type:* string

---

##### `EnableWhenReferencedParameterEqualsInput`<sup>Optional</sup> <a name="EnableWhenReferencedParameterEqualsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEqualsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnableWhenReferencedParameterEqualsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `PrerequisitesInput`<sup>Optional</sup> <a name="PrerequisitesInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisitesInput"></a>

```csharp
public string[] PrerequisitesInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `EnableParameterReference`<sup>Required</sup> <a name="EnableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReference"></a>

```csharp
public string EnableParameterReference { get; }
```

- *Type:* string

---

##### `EnableWhenReferencedParameterEquals`<sup>Required</sup> <a name="EnableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEquals"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnableWhenReferencedParameterEquals { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Prerequisites`<sup>Required</sup> <a name="Prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisites"></a>

```csharp
public string[] Prerequisites { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesMediaWorkflowTimeoutsOutputReference <a name="MediaServicesMediaWorkflowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesMediaWorkflowTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



