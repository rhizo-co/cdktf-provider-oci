# `stackMonitoringDiscoveryJob` Submodule <a name="`stackMonitoringDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringDiscoveryJob <a name="StackMonitoringDiscoveryJob" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job oci_stack_monitoring_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJob(Construct Scope, string Id, StackMonitoringDiscoveryJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig">StackMonitoringDiscoveryJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig">StackMonitoringDiscoveryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putDiscoveryDetails">PutDiscoveryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDiscoveryClient">ResetDiscoveryClient</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDiscoveryType">ResetDiscoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetShouldPropagateTagsToDiscoveredResources">ResetShouldPropagateTagsToDiscoveredResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiscoveryDetails` <a name="PutDiscoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putDiscoveryDetails"></a>

```csharp
private void PutDiscoveryDetails(StackMonitoringDiscoveryJobDiscoveryDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putDiscoveryDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putTimeouts"></a>

```csharp
private void PutTimeouts(StackMonitoringDiscoveryJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDiscoveryClient` <a name="ResetDiscoveryClient" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDiscoveryClient"></a>

```csharp
private void ResetDiscoveryClient()
```

##### `ResetDiscoveryType` <a name="ResetDiscoveryType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDiscoveryType"></a>

```csharp
private void ResetDiscoveryType()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShouldPropagateTagsToDiscoveredResources` <a name="ResetShouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetShouldPropagateTagsToDiscoveredResources"></a>

```csharp
private void ResetShouldPropagateTagsToDiscoveredResources()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringDiscoveryJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringDiscoveryJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringDiscoveryJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringDiscoveryJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StackMonitoringDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringDiscoveryJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryDetails">DiscoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference">StackMonitoringDiscoveryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryClientInput">DiscoveryClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryDetailsInput">DiscoveryDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryTypeInput">DiscoveryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResourcesInput">ShouldPropagateTagsToDiscoveredResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryClient">DiscoveryClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryType">DiscoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResources">ShouldPropagateTagsToDiscoveredResources</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DiscoveryDetails`<sup>Required</sup> <a name="DiscoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryDetails"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference DiscoveryDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeouts"></a>

```csharp
public StackMonitoringDiscoveryJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference">StackMonitoringDiscoveryJobTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiscoveryClientInput`<sup>Optional</sup> <a name="DiscoveryClientInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryClientInput"></a>

```csharp
public string DiscoveryClientInput { get; }
```

- *Type:* string

---

##### `DiscoveryDetailsInput`<sup>Optional</sup> <a name="DiscoveryDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryDetailsInput"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetails DiscoveryDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

---

##### `DiscoveryTypeInput`<sup>Optional</sup> <a name="DiscoveryTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryTypeInput"></a>

```csharp
public string DiscoveryTypeInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ShouldPropagateTagsToDiscoveredResourcesInput`<sup>Optional</sup> <a name="ShouldPropagateTagsToDiscoveredResourcesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResourcesInput"></a>

```csharp
public object ShouldPropagateTagsToDiscoveredResourcesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiscoveryClient`<sup>Required</sup> <a name="DiscoveryClient" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryClient"></a>

```csharp
public string DiscoveryClient { get; }
```

- *Type:* string

---

##### `DiscoveryType`<sup>Required</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryType"></a>

```csharp
public string DiscoveryType { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ShouldPropagateTagsToDiscoveredResources`<sup>Required</sup> <a name="ShouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResources"></a>

```csharp
public object ShouldPropagateTagsToDiscoveredResources { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringDiscoveryJobConfig <a name="StackMonitoringDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    StackMonitoringDiscoveryJobDiscoveryDetails DiscoveryDetails,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DiscoveryClient = null,
    string DiscoveryType = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object ShouldPropagateTagsToDiscoveredResources = null,
    StackMonitoringDiscoveryJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#compartment_id StackMonitoringDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryDetails">DiscoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a></code> | discovery_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#defined_tags StackMonitoringDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryClient">DiscoveryClient</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_client StackMonitoringDiscoveryJob#discovery_client}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryType">DiscoveryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_type StackMonitoringDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#freeform_tags StackMonitoringDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#id StackMonitoringDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.shouldPropagateTagsToDiscoveredResources">ShouldPropagateTagsToDiscoveredResources</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#should_propagate_tags_to_discovered_resources StackMonitoringDiscoveryJob#should_propagate_tags_to_discovered_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#compartment_id StackMonitoringDiscoveryJob#compartment_id}.

---

##### `DiscoveryDetails`<sup>Required</sup> <a name="DiscoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryDetails"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetails DiscoveryDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

discovery_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_details StackMonitoringDiscoveryJob#discovery_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#defined_tags StackMonitoringDiscoveryJob#defined_tags}.

---

##### `DiscoveryClient`<sup>Optional</sup> <a name="DiscoveryClient" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryClient"></a>

```csharp
public string DiscoveryClient { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_client StackMonitoringDiscoveryJob#discovery_client}.

---

##### `DiscoveryType`<sup>Optional</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryType"></a>

```csharp
public string DiscoveryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_type StackMonitoringDiscoveryJob#discovery_type}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#freeform_tags StackMonitoringDiscoveryJob#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#id StackMonitoringDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShouldPropagateTagsToDiscoveredResources`<sup>Optional</sup> <a name="ShouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.shouldPropagateTagsToDiscoveredResources"></a>

```csharp
public object ShouldPropagateTagsToDiscoveredResources { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#should_propagate_tags_to_discovered_resources StackMonitoringDiscoveryJob#should_propagate_tags_to_discovered_resources}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.timeouts"></a>

```csharp
public StackMonitoringDiscoveryJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#timeouts StackMonitoringDiscoveryJob#timeouts}

---

### StackMonitoringDiscoveryJobDiscoveryDetails <a name="StackMonitoringDiscoveryJobDiscoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetails {
    string AgentId,
    StackMonitoringDiscoveryJobDiscoveryDetailsProperties Properties,
    string ResourceName,
    string ResourceType,
    StackMonitoringDiscoveryJobDiscoveryDetailsCredentials Credentials = null,
    string License = null,
    StackMonitoringDiscoveryJobDiscoveryDetailsTags Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.agentId">AgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#agent_id StackMonitoringDiscoveryJob#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a></code> | properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_name StackMonitoringDiscoveryJob#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_type StackMonitoringDiscoveryJob#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.license">License</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#license StackMonitoringDiscoveryJob#license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a></code> | tags block. |

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#agent_id StackMonitoringDiscoveryJob#agent_id}.

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.properties"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsProperties Properties { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties StackMonitoringDiscoveryJob#properties}

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_name StackMonitoringDiscoveryJob#resource_name}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_type StackMonitoringDiscoveryJob#resource_type}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.credentials"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credentials StackMonitoringDiscoveryJob#credentials}

---

##### `License`<sup>Optional</sup> <a name="License" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.license"></a>

```csharp
public string License { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#license StackMonitoringDiscoveryJob#license}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.tags"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsTags Tags { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#tags StackMonitoringDiscoveryJob#tags}

---

### StackMonitoringDiscoveryJobDiscoveryDetailsCredentials <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentials {
    object Items
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#items StackMonitoringDiscoveryJob#items}

---

### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems {
    string CredentialName,
    string CredentialType,
    StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties Properties
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.credentialName">CredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_name StackMonitoringDiscoveryJob#credential_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.credentialType">CredentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_type StackMonitoringDiscoveryJob#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a></code> | properties block. |

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.credentialName"></a>

```csharp
public string CredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_name StackMonitoringDiscoveryJob#credential_name}.

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_type StackMonitoringDiscoveryJob#credential_type}.

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.properties"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties Properties { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties StackMonitoringDiscoveryJob#properties}

---

### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties {
    System.Collections.Generic.IDictionary<string, string> PropertiesMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.property.propertiesMap">PropertiesMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}. |

---

##### `PropertiesMap`<sup>Optional</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.property.propertiesMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}.

---

### StackMonitoringDiscoveryJobDiscoveryDetailsProperties <a name="StackMonitoringDiscoveryJobDiscoveryDetailsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsProperties {
    System.Collections.Generic.IDictionary<string, string> PropertiesMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties.property.propertiesMap">PropertiesMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}. |

---

##### `PropertiesMap`<sup>Optional</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties.property.propertiesMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}.

---

### StackMonitoringDiscoveryJobDiscoveryDetailsTags <a name="StackMonitoringDiscoveryJobDiscoveryDetailsTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsTags {
    System.Collections.Generic.IDictionary<string, string> PropertiesMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags.property.propertiesMap">PropertiesMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}. |

---

##### `PropertiesMap`<sup>Optional</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags.property.propertiesMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}.

---

### StackMonitoringDiscoveryJobTimeouts <a name="StackMonitoringDiscoveryJobTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#create StackMonitoringDiscoveryJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#delete StackMonitoringDiscoveryJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#update StackMonitoringDiscoveryJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#create StackMonitoringDiscoveryJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#delete StackMonitoringDiscoveryJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#update StackMonitoringDiscoveryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get"></a>

```csharp
private StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.putProperties">PutProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.putProperties"></a>

```csharp
private void PutProperties(StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialNameInput">CredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.properties"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference</a>

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialNameInput"></a>

```csharp
public string CredentialNameInput { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.propertiesInput"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties PropertiesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resetPropertiesMap">ResetPropertiesMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPropertiesMap` <a name="ResetPropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resetPropertiesMap"></a>

```csharp
private void ResetPropertiesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMapInput">PropertiesMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMap">PropertiesMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesMapInput`<sup>Optional</sup> <a name="PropertiesMapInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PropertiesMap`<sup>Required</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.putItems.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.items"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetLicense">ResetLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putCredentials"></a>

```csharp
private void PutCredentials(StackMonitoringDiscoveryJobDiscoveryDetailsCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

---

##### `PutProperties` <a name="PutProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putProperties"></a>

```csharp
private void PutProperties(StackMonitoringDiscoveryJobDiscoveryDetailsProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putTags"></a>

```csharp
private void PutTags(StackMonitoringDiscoveryJobDiscoveryDetailsTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

---

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetLicense` <a name="ResetLicense" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetLicense"></a>

```csharp
private void ResetLicense()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.licenseInput">LicenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.license">License</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentials"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.properties"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tags"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentialsInput"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

---

##### `LicenseInput`<sup>Optional</sup> <a name="LicenseInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.licenseInput"></a>

```csharp
public string LicenseInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.propertiesInput"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsProperties PropertiesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tagsInput"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsTags TagsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `License`<sup>Required</sup> <a name="License" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.license"></a>

```csharp
public string License { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resetPropertiesMap">ResetPropertiesMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPropertiesMap` <a name="ResetPropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resetPropertiesMap"></a>

```csharp
private void ResetPropertiesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMapInput">PropertiesMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMap">PropertiesMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesMapInput`<sup>Optional</sup> <a name="PropertiesMapInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PropertiesMap`<sup>Required</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resetPropertiesMap">ResetPropertiesMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPropertiesMap` <a name="ResetPropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resetPropertiesMap"></a>

```csharp
private void ResetPropertiesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMapInput">PropertiesMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMap">PropertiesMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesMapInput`<sup>Optional</sup> <a name="PropertiesMapInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PropertiesMap`<sup>Required</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringDiscoveryJobDiscoveryDetailsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

---


### StackMonitoringDiscoveryJobTimeoutsOutputReference <a name="StackMonitoringDiscoveryJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringDiscoveryJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



