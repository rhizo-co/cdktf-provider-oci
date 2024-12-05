# `dnsSteeringPolicy` Submodule <a name="`dnsSteeringPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsSteeringPolicy <a name="DnsSteeringPolicy" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy oci_dns_steering_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicy(Construct Scope, string Id, DnsSteeringPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig">DnsSteeringPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig">DnsSteeringPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers">PutAnswers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetAnswers">ResetAnswers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetHealthCheckMonitorId">ResetHealthCheckMonitorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnswers` <a name="PutAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers"></a>

```csharp
private void PutAnswers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers.parameter.value"></a>

- *Type:* object

---

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(DnsSteeringPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

---

##### `ResetAnswers` <a name="ResetAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetAnswers"></a>

```csharp
private void ResetAnswers()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHealthCheckMonitorId` <a name="ResetHealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetHealthCheckMonitorId"></a>

```csharp
private void ResetHealthCheckMonitorId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsSteeringPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DnsSteeringPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DnsSteeringPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DnsSteeringPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DnsSteeringPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DnsSteeringPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsSteeringPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsSteeringPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DnsSteeringPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answers">Answers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList">DnsSteeringPolicyAnswersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList">DnsSteeringPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.selfAttribute">SelfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference">DnsSteeringPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answersInput">AnswersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorIdInput">HealthCheckMonitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorId">HealthCheckMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Answers`<sup>Required</sup> <a name="Answers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answers"></a>

```csharp
public DnsSteeringPolicyAnswersList Answers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList">DnsSteeringPolicyAnswersList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rules"></a>

```csharp
public DnsSteeringPolicyRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList">DnsSteeringPolicyRulesList</a>

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.selfAttribute"></a>

```csharp
public string SelfAttribute { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeouts"></a>

```csharp
public DnsSteeringPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference">DnsSteeringPolicyTimeoutsOutputReference</a>

---

##### `AnswersInput`<sup>Optional</sup> <a name="AnswersInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answersInput"></a>

```csharp
public object AnswersInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HealthCheckMonitorIdInput`<sup>Optional</sup> <a name="HealthCheckMonitorIdInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorIdInput"></a>

```csharp
public string HealthCheckMonitorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HealthCheckMonitorId`<sup>Required</sup> <a name="HealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorId"></a>

```csharp
public string HealthCheckMonitorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsSteeringPolicyAnswers <a name="DnsSteeringPolicyAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyAnswers {
    string Name,
    string Rdata,
    string Rtype,
    object IsDisabled = null,
    string Pool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#name DnsSteeringPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rdata">Rdata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rdata DnsSteeringPolicy#rdata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rtype">Rtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rtype DnsSteeringPolicy#rtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.isDisabled">IsDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#is_disabled DnsSteeringPolicy#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.pool">Pool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#pool DnsSteeringPolicy#pool}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#name DnsSteeringPolicy#name}.

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rdata"></a>

```csharp
public string Rdata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rdata DnsSteeringPolicy#rdata}.

---

##### `Rtype`<sup>Required</sup> <a name="Rtype" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rtype"></a>

```csharp
public string Rtype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rtype DnsSteeringPolicy#rtype}.

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.isDisabled"></a>

```csharp
public object IsDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#is_disabled DnsSteeringPolicy#is_disabled}.

---

##### `Pool`<sup>Optional</sup> <a name="Pool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.pool"></a>

```csharp
public string Pool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#pool DnsSteeringPolicy#pool}.

---

### DnsSteeringPolicyConfig <a name="DnsSteeringPolicyConfig" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string Template,
    object Answers = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string HealthCheckMonitorId = null,
    string Id = null,
    object Rules = null,
    DnsSteeringPolicyTimeouts Timeouts = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.template">Template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.answers">Answers</a></code> | <code>object</code> | answers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.healthCheckMonitorId">HealthCheckMonitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.ttl">Ttl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}.

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}.

---

##### `Answers`<sup>Optional</sup> <a name="Answers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.answers"></a>

```csharp
public object Answers { get; set; }
```

- *Type:* object

answers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answers DnsSteeringPolicy#answers}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}.

---

##### `HealthCheckMonitorId`<sup>Optional</sup> <a name="HealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.healthCheckMonitorId"></a>

```csharp
public string HealthCheckMonitorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rules DnsSteeringPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.timeouts"></a>

```csharp
public DnsSteeringPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#timeouts DnsSteeringPolicy#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}.

---

### DnsSteeringPolicyRules <a name="DnsSteeringPolicyRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRules {
    string RuleType,
    object Cases = null,
    object DefaultAnswerData = null,
    double DefaultCount = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.ruleType">RuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rule_type DnsSteeringPolicy#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.cases">Cases</a></code> | <code>object</code> | cases block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultAnswerData">DefaultAnswerData</a></code> | <code>object</code> | default_answer_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultCount">DefaultCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_count DnsSteeringPolicy#default_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#description DnsSteeringPolicy#description}. |

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.ruleType"></a>

```csharp
public string RuleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rule_type DnsSteeringPolicy#rule_type}.

---

##### `Cases`<sup>Optional</sup> <a name="Cases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.cases"></a>

```csharp
public object Cases { get; set; }
```

- *Type:* object

cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#cases DnsSteeringPolicy#cases}

---

##### `DefaultAnswerData`<sup>Optional</sup> <a name="DefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultAnswerData"></a>

```csharp
public object DefaultAnswerData { get; set; }
```

- *Type:* object

default_answer_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_answer_data DnsSteeringPolicy#default_answer_data}

---

##### `DefaultCount`<sup>Optional</sup> <a name="DefaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultCount"></a>

```csharp
public double DefaultCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_count DnsSteeringPolicy#default_count}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#description DnsSteeringPolicy#description}.

---

### DnsSteeringPolicyRulesCases <a name="DnsSteeringPolicyRulesCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesCases {
    object AnswerData = null,
    string CaseCondition = null,
    double Count = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.answerData">AnswerData</a></code> | <code>object</code> | answer_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.caseCondition">CaseCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#case_condition DnsSteeringPolicy#case_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#count DnsSteeringPolicy#count}. |

---

##### `AnswerData`<sup>Optional</sup> <a name="AnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.answerData"></a>

```csharp
public object AnswerData { get; set; }
```

- *Type:* object

answer_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_data DnsSteeringPolicy#answer_data}

---

##### `CaseCondition`<sup>Optional</sup> <a name="CaseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.caseCondition"></a>

```csharp
public string CaseCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#case_condition DnsSteeringPolicy#case_condition}.

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#count DnsSteeringPolicy#count}.

---

### DnsSteeringPolicyRulesCasesAnswerData <a name="DnsSteeringPolicyRulesCasesAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesCasesAnswerData {
    string AnswerCondition = null,
    object ShouldKeep = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.answerCondition">AnswerCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.shouldKeep">ShouldKeep</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}. |

---

##### `AnswerCondition`<sup>Optional</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.answerCondition"></a>

```csharp
public string AnswerCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}.

---

##### `ShouldKeep`<sup>Optional</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.shouldKeep"></a>

```csharp
public object ShouldKeep { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}.

---

### DnsSteeringPolicyRulesDefaultAnswerData <a name="DnsSteeringPolicyRulesDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesDefaultAnswerData {
    string AnswerCondition = null,
    object ShouldKeep = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.answerCondition">AnswerCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.shouldKeep">ShouldKeep</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}. |

---

##### `AnswerCondition`<sup>Optional</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.answerCondition"></a>

```csharp
public string AnswerCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}.

---

##### `ShouldKeep`<sup>Optional</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.shouldKeep"></a>

```csharp
public object ShouldKeep { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}.

---

### DnsSteeringPolicyTimeouts <a name="DnsSteeringPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#create DnsSteeringPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#delete DnsSteeringPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#update DnsSteeringPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#create DnsSteeringPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#delete DnsSteeringPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#update DnsSteeringPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsSteeringPolicyAnswersList <a name="DnsSteeringPolicyAnswersList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyAnswersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get"></a>

```csharp
private DnsSteeringPolicyAnswersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyAnswersOutputReference <a name="DnsSteeringPolicyAnswersOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyAnswersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetIsDisabled">ResetIsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetPool">ResetPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetIsDisabled"></a>

```csharp
private void ResetIsDisabled()
```

##### `ResetPool` <a name="ResetPool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetPool"></a>

```csharp
private void ResetPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabledInput">IsDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.poolInput">PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdataInput">RdataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtypeInput">RtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabled">IsDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.pool">Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdata">Rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtype">Rtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabledInput"></a>

```csharp
public object IsDisabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PoolInput`<sup>Optional</sup> <a name="PoolInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.poolInput"></a>

```csharp
public string PoolInput { get; }
```

- *Type:* string

---

##### `RdataInput`<sup>Optional</sup> <a name="RdataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdataInput"></a>

```csharp
public string RdataInput { get; }
```

- *Type:* string

---

##### `RtypeInput`<sup>Optional</sup> <a name="RtypeInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtypeInput"></a>

```csharp
public string RtypeInput { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabled"></a>

```csharp
public object IsDisabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.pool"></a>

```csharp
public string Pool { get; }
```

- *Type:* string

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdata"></a>

```csharp
public string Rdata { get; }
```

- *Type:* string

---

##### `Rtype`<sup>Required</sup> <a name="Rtype" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtype"></a>

```csharp
public string Rtype { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyRulesCasesAnswerDataList <a name="DnsSteeringPolicyRulesCasesAnswerDataList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesCasesAnswerDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get"></a>

```csharp
private DnsSteeringPolicyRulesCasesAnswerDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyRulesCasesAnswerDataOutputReference <a name="DnsSteeringPolicyRulesCasesAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesCasesAnswerDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetAnswerCondition">ResetAnswerCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetShouldKeep">ResetShouldKeep</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnswerCondition` <a name="ResetAnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetAnswerCondition"></a>

```csharp
private void ResetAnswerCondition()
```

##### `ResetShouldKeep` <a name="ResetShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetShouldKeep"></a>

```csharp
private void ResetShouldKeep()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerConditionInput">AnswerConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeepInput">ShouldKeepInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerCondition">AnswerCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeep">ShouldKeep</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerConditionInput`<sup>Optional</sup> <a name="AnswerConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerConditionInput"></a>

```csharp
public string AnswerConditionInput { get; }
```

- *Type:* string

---

##### `ShouldKeepInput`<sup>Optional</sup> <a name="ShouldKeepInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeepInput"></a>

```csharp
public object ShouldKeepInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `AnswerCondition`<sup>Required</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerCondition"></a>

```csharp
public string AnswerCondition { get; }
```

- *Type:* string

---

##### `ShouldKeep`<sup>Required</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeep"></a>

```csharp
public object ShouldKeep { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyRulesCasesList <a name="DnsSteeringPolicyRulesCasesList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesCasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get"></a>

```csharp
private DnsSteeringPolicyRulesCasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyRulesCasesOutputReference <a name="DnsSteeringPolicyRulesCasesOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesCasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData">PutAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetAnswerData">ResetAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCaseCondition">ResetCaseCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnswerData` <a name="PutAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData"></a>

```csharp
private void PutAnswerData(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData.parameter.value"></a>

- *Type:* object

---

##### `ResetAnswerData` <a name="ResetAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetAnswerData"></a>

```csharp
private void ResetAnswerData()
```

##### `ResetCaseCondition` <a name="ResetCaseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCaseCondition"></a>

```csharp
private void ResetCaseCondition()
```

##### `ResetCount` <a name="ResetCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerData">AnswerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList">DnsSteeringPolicyRulesCasesAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerDataInput">AnswerDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseConditionInput">CaseConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseCondition">CaseCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerData`<sup>Required</sup> <a name="AnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerData"></a>

```csharp
public DnsSteeringPolicyRulesCasesAnswerDataList AnswerData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList">DnsSteeringPolicyRulesCasesAnswerDataList</a>

---

##### `AnswerDataInput`<sup>Optional</sup> <a name="AnswerDataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerDataInput"></a>

```csharp
public object AnswerDataInput { get; }
```

- *Type:* object

---

##### `CaseConditionInput`<sup>Optional</sup> <a name="CaseConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseConditionInput"></a>

```csharp
public string CaseConditionInput { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `CaseCondition`<sup>Required</sup> <a name="CaseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseCondition"></a>

```csharp
public string CaseCondition { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyRulesDefaultAnswerDataList <a name="DnsSteeringPolicyRulesDefaultAnswerDataList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesDefaultAnswerDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get"></a>

```csharp
private DnsSteeringPolicyRulesDefaultAnswerDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyRulesDefaultAnswerDataOutputReference <a name="DnsSteeringPolicyRulesDefaultAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesDefaultAnswerDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetAnswerCondition">ResetAnswerCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetShouldKeep">ResetShouldKeep</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnswerCondition` <a name="ResetAnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetAnswerCondition"></a>

```csharp
private void ResetAnswerCondition()
```

##### `ResetShouldKeep` <a name="ResetShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetShouldKeep"></a>

```csharp
private void ResetShouldKeep()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerConditionInput">AnswerConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeepInput">ShouldKeepInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerCondition">AnswerCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeep">ShouldKeep</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerConditionInput`<sup>Optional</sup> <a name="AnswerConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerConditionInput"></a>

```csharp
public string AnswerConditionInput { get; }
```

- *Type:* string

---

##### `ShouldKeepInput`<sup>Optional</sup> <a name="ShouldKeepInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeepInput"></a>

```csharp
public object ShouldKeepInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `AnswerCondition`<sup>Required</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerCondition"></a>

```csharp
public string AnswerCondition { get; }
```

- *Type:* string

---

##### `ShouldKeep`<sup>Required</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeep"></a>

```csharp
public object ShouldKeep { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyRulesList <a name="DnsSteeringPolicyRulesList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get"></a>

```csharp
private DnsSteeringPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyRulesOutputReference <a name="DnsSteeringPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases">PutCases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData">PutDefaultAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetCases">ResetCases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultAnswerData">ResetDefaultAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultCount">ResetDefaultCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCases` <a name="PutCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases"></a>

```csharp
private void PutCases(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultAnswerData` <a name="PutDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData"></a>

```csharp
private void PutDefaultAnswerData(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData.parameter.value"></a>

- *Type:* object

---

##### `ResetCases` <a name="ResetCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetCases"></a>

```csharp
private void ResetCases()
```

##### `ResetDefaultAnswerData` <a name="ResetDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultAnswerData"></a>

```csharp
private void ResetDefaultAnswerData()
```

##### `ResetDefaultCount` <a name="ResetDefaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultCount"></a>

```csharp
private void ResetDefaultCount()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.cases">Cases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList">DnsSteeringPolicyRulesCasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerData">DefaultAnswerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList">DnsSteeringPolicyRulesDefaultAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.casesInput">CasesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerDataInput">DefaultAnswerDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCountInput">DefaultCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleTypeInput">RuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCount">DefaultCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cases`<sup>Required</sup> <a name="Cases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.cases"></a>

```csharp
public DnsSteeringPolicyRulesCasesList Cases { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList">DnsSteeringPolicyRulesCasesList</a>

---

##### `DefaultAnswerData`<sup>Required</sup> <a name="DefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerData"></a>

```csharp
public DnsSteeringPolicyRulesDefaultAnswerDataList DefaultAnswerData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList">DnsSteeringPolicyRulesDefaultAnswerDataList</a>

---

##### `CasesInput`<sup>Optional</sup> <a name="CasesInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.casesInput"></a>

```csharp
public object CasesInput { get; }
```

- *Type:* object

---

##### `DefaultAnswerDataInput`<sup>Optional</sup> <a name="DefaultAnswerDataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerDataInput"></a>

```csharp
public object DefaultAnswerDataInput { get; }
```

- *Type:* object

---

##### `DefaultCountInput`<sup>Optional</sup> <a name="DefaultCountInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCountInput"></a>

```csharp
public double DefaultCountInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleTypeInput"></a>

```csharp
public string RuleTypeInput { get; }
```

- *Type:* string

---

##### `DefaultCount`<sup>Required</sup> <a name="DefaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCount"></a>

```csharp
public double DefaultCount { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSteeringPolicyTimeoutsOutputReference <a name="DnsSteeringPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DnsSteeringPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



