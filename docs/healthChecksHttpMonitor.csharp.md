# `healthChecksHttpMonitor` Submodule <a name="`healthChecksHttpMonitor` Submodule" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthChecksHttpMonitor <a name="HealthChecksHttpMonitor" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor oci_health_checks_http_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new HealthChecksHttpMonitor(Construct Scope, string Id, HealthChecksHttpMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig">HealthChecksHttpMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig">HealthChecksHttpMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetVantagePointNames">ResetVantagePointNames</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.putTimeouts"></a>

```csharp
private void PutTimeouts(HealthChecksHttpMonitorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHeaders` <a name="ResetHeaders" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetMethod` <a name="ResetMethod" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVantagePointNames` <a name="ResetVantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.resetVantagePointNames"></a>

```csharp
private void ResetVantagePointNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HealthChecksHttpMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

HealthChecksHttpMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

HealthChecksHttpMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

HealthChecksHttpMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

HealthChecksHttpMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HealthChecksHttpMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthChecksHttpMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthChecksHttpMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HealthChecksHttpMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.homeRegion">HomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.resultsUrl">ResultsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference">HealthChecksHttpMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.intervalInSecondsInput">IntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.targetsInput">TargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.vantagePointNamesInput">VantagePointNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.vantagePointNames">VantagePointNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.homeRegion"></a>

```csharp
public string HomeRegion { get; }
```

- *Type:* string

---

##### `ResultsUrl`<sup>Required</sup> <a name="ResultsUrl" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.resultsUrl"></a>

```csharp
public string ResultsUrl { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeouts"></a>

```csharp
public HealthChecksHttpMonitorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference">HealthChecksHttpMonitorTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntervalInSecondsInput`<sup>Optional</sup> <a name="IntervalInSecondsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.intervalInSecondsInput"></a>

```csharp
public double IntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.targetsInput"></a>

```csharp
public string[] TargetsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VantagePointNamesInput`<sup>Optional</sup> <a name="VantagePointNamesInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.vantagePointNamesInput"></a>

```csharp
public string[] VantagePointNamesInput { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `VantagePointNames`<sup>Required</sup> <a name="VantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.vantagePointNames"></a>

```csharp
public string[] VantagePointNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthChecksHttpMonitorConfig <a name="HealthChecksHttpMonitorConfig" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new HealthChecksHttpMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    double IntervalInSeconds,
    string Protocol,
    string[] Targets,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    string Id = null,
    object IsEnabled = null,
    string Method = null,
    string Path = null,
    double Port = null,
    double TimeoutInSeconds = null,
    HealthChecksHttpMonitorTimeouts Timeouts = null,
    string[] VantagePointNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#compartment_id HealthChecksHttpMonitor#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#display_name HealthChecksHttpMonitor#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#interval_in_seconds HealthChecksHttpMonitor#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#protocol HealthChecksHttpMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.targets">Targets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#targets HealthChecksHttpMonitor#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#defined_tags HealthChecksHttpMonitor#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#freeform_tags HealthChecksHttpMonitor#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#headers HealthChecksHttpMonitor#headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#id HealthChecksHttpMonitor#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#is_enabled HealthChecksHttpMonitor#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.method">Method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#method HealthChecksHttpMonitor#method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#path HealthChecksHttpMonitor#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#port HealthChecksHttpMonitor#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeout_in_seconds HealthChecksHttpMonitor#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.vantagePointNames">VantagePointNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#vantage_point_names HealthChecksHttpMonitor#vantage_point_names}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#compartment_id HealthChecksHttpMonitor#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#display_name HealthChecksHttpMonitor#display_name}.

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#interval_in_seconds HealthChecksHttpMonitor#interval_in_seconds}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#protocol HealthChecksHttpMonitor#protocol}.

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.targets"></a>

```csharp
public string[] Targets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#targets HealthChecksHttpMonitor#targets}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#defined_tags HealthChecksHttpMonitor#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#freeform_tags HealthChecksHttpMonitor#freeform_tags}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#headers HealthChecksHttpMonitor#headers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#id HealthChecksHttpMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#is_enabled HealthChecksHttpMonitor#is_enabled}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#method HealthChecksHttpMonitor#method}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#path HealthChecksHttpMonitor#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#port HealthChecksHttpMonitor#port}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeout_in_seconds HealthChecksHttpMonitor#timeout_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.timeouts"></a>

```csharp
public HealthChecksHttpMonitorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts">HealthChecksHttpMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#timeouts HealthChecksHttpMonitor#timeouts}

---

##### `VantagePointNames`<sup>Optional</sup> <a name="VantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorConfig.property.vantagePointNames"></a>

```csharp
public string[] VantagePointNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#vantage_point_names HealthChecksHttpMonitor#vantage_point_names}.

---

### HealthChecksHttpMonitorTimeouts <a name="HealthChecksHttpMonitorTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new HealthChecksHttpMonitorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#create HealthChecksHttpMonitor#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#delete HealthChecksHttpMonitor#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#update HealthChecksHttpMonitor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#create HealthChecksHttpMonitor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#delete HealthChecksHttpMonitor#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_monitor#update HealthChecksHttpMonitor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthChecksHttpMonitorTimeoutsOutputReference <a name="HealthChecksHttpMonitorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new HealthChecksHttpMonitorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.healthChecksHttpMonitor.HealthChecksHttpMonitorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



