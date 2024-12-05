# `networkLoadBalancerBackendSet` Submodule <a name="`networkLoadBalancerBackendSet` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerBackendSet <a name="NetworkLoadBalancerBackendSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set oci_network_load_balancer_backend_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSet(Construct Scope, string Id, NetworkLoadBalancerBackendSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig">NetworkLoadBalancerBackendSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig">NetworkLoadBalancerBackendSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker">PutHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsFailOpen">ResetIsFailOpen</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsInstantFailoverEnabled">ResetIsInstantFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsPreserveSource">ResetIsPreserveSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthChecker` <a name="PutHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker"></a>

```csharp
private void PutHealthChecker(NetworkLoadBalancerBackendSetHealthChecker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkLoadBalancerBackendSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIpVersion"></a>

```csharp
private void ResetIpVersion()
```

##### `ResetIsFailOpen` <a name="ResetIsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsFailOpen"></a>

```csharp
private void ResetIsFailOpen()
```

##### `ResetIsInstantFailoverEnabled` <a name="ResetIsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsInstantFailoverEnabled"></a>

```csharp
private void ResetIsInstantFailoverEnabled()
```

##### `ResetIsPreserveSource` <a name="ResetIsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsPreserveSource"></a>

```csharp
private void ResetIsPreserveSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkLoadBalancerBackendSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkLoadBalancerBackendSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkLoadBalancerBackendSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkLoadBalancerBackendSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkLoadBalancerBackendSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkLoadBalancerBackendSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerBackendSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.backends">Backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList">NetworkLoadBalancerBackendSetBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference">NetworkLoadBalancerBackendSetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference">NetworkLoadBalancerBackendSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthCheckerInput">HealthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersionInput">IpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpenInput">IsFailOpenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabledInput">IsInstantFailoverEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSourceInput">IsPreserveSourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersion">IpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpen">IsFailOpen</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled">IsInstantFailoverEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSource">IsPreserveSource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policy">Policy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.backends"></a>

```csharp
public NetworkLoadBalancerBackendSetBackendsList Backends { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList">NetworkLoadBalancerBackendSetBackendsList</a>

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthChecker"></a>

```csharp
public NetworkLoadBalancerBackendSetHealthCheckerOutputReference HealthChecker { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference">NetworkLoadBalancerBackendSetHealthCheckerOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeouts"></a>

```csharp
public NetworkLoadBalancerBackendSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference">NetworkLoadBalancerBackendSetTimeoutsOutputReference</a>

---

##### `HealthCheckerInput`<sup>Optional</sup> <a name="HealthCheckerInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthCheckerInput"></a>

```csharp
public NetworkLoadBalancerBackendSetHealthChecker HealthCheckerInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersionInput"></a>

```csharp
public string IpVersionInput { get; }
```

- *Type:* string

---

##### `IsFailOpenInput`<sup>Optional</sup> <a name="IsFailOpenInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpenInput"></a>

```csharp
public object IsFailOpenInput { get; }
```

- *Type:* object

---

##### `IsInstantFailoverEnabledInput`<sup>Optional</sup> <a name="IsInstantFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabledInput"></a>

```csharp
public object IsInstantFailoverEnabledInput { get; }
```

- *Type:* object

---

##### `IsPreserveSourceInput`<sup>Optional</sup> <a name="IsPreserveSourceInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSourceInput"></a>

```csharp
public object IsPreserveSourceInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput"></a>

```csharp
public string NetworkLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersion"></a>

```csharp
public string IpVersion { get; }
```

- *Type:* string

---

##### `IsFailOpen`<sup>Required</sup> <a name="IsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpen"></a>

```csharp
public object IsFailOpen { get; }
```

- *Type:* object

---

##### `IsInstantFailoverEnabled`<sup>Required</sup> <a name="IsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled"></a>

```csharp
public object IsInstantFailoverEnabled { get; }
```

- *Type:* object

---

##### `IsPreserveSource`<sup>Required</sup> <a name="IsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSource"></a>

```csharp
public object IsPreserveSource { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerBackendSetBackends <a name="NetworkLoadBalancerBackendSetBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetBackends {

};
```


### NetworkLoadBalancerBackendSetConfig <a name="NetworkLoadBalancerBackendSetConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    NetworkLoadBalancerBackendSetHealthChecker HealthChecker,
    string Name,
    string NetworkLoadBalancerId,
    string Policy,
    string Id = null,
    string IpVersion = null,
    object IsFailOpen = null,
    object IsInstantFailoverEnabled = null,
    object IsPreserveSource = null,
    NetworkLoadBalancerBackendSetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.ipVersion">IpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isFailOpen">IsFailOpen</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isInstantFailoverEnabled">IsInstantFailoverEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isPreserveSource">IsPreserveSource</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.healthChecker"></a>

```csharp
public NetworkLoadBalancerBackendSetHealthChecker HealthChecker { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#health_checker NetworkLoadBalancerBackendSet#health_checker}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}.

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.ipVersion"></a>

```csharp
public string IpVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}.

---

##### `IsFailOpen`<sup>Optional</sup> <a name="IsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isFailOpen"></a>

```csharp
public object IsFailOpen { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}.

---

##### `IsInstantFailoverEnabled`<sup>Optional</sup> <a name="IsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isInstantFailoverEnabled"></a>

```csharp
public object IsInstantFailoverEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}.

---

##### `IsPreserveSource`<sup>Optional</sup> <a name="IsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isPreserveSource"></a>

```csharp
public object IsPreserveSource { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.timeouts"></a>

```csharp
public NetworkLoadBalancerBackendSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeouts NetworkLoadBalancerBackendSet#timeouts}

---

### NetworkLoadBalancerBackendSetHealthChecker <a name="NetworkLoadBalancerBackendSetHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetHealthChecker {
    string Protocol,
    NetworkLoadBalancerBackendSetHealthCheckerDns Dns = null,
    double IntervalInMillis = null,
    double Port = null,
    string RequestData = null,
    string ResponseBodyRegex = null,
    string ResponseData = null,
    double Retries = null,
    double ReturnCode = null,
    double TimeoutInMillis = null,
    string UrlPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.intervalInMillis">IntervalInMillis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.requestData">RequestData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseData">ResponseData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.retries">Retries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.returnCode">ReturnCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.urlPath">UrlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.dns"></a>

```csharp
public NetworkLoadBalancerBackendSetHealthCheckerDns Dns { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#dns NetworkLoadBalancerBackendSet#dns}

---

##### `IntervalInMillis`<sup>Optional</sup> <a name="IntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.intervalInMillis"></a>

```csharp
public double IntervalInMillis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}.

---

##### `RequestData`<sup>Optional</sup> <a name="RequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.requestData"></a>

```csharp
public string RequestData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}.

---

##### `ResponseBodyRegex`<sup>Optional</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseBodyRegex"></a>

```csharp
public string ResponseBodyRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}.

---

##### `ResponseData`<sup>Optional</sup> <a name="ResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseData"></a>

```csharp
public string ResponseData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}.

---

##### `ReturnCode`<sup>Optional</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.returnCode"></a>

```csharp
public double ReturnCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}.

---

##### `TimeoutInMillis`<sup>Optional</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.timeoutInMillis"></a>

```csharp
public double TimeoutInMillis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}.

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.urlPath"></a>

```csharp
public string UrlPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}.

---

### NetworkLoadBalancerBackendSetHealthCheckerDns <a name="NetworkLoadBalancerBackendSetHealthCheckerDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetHealthCheckerDns {
    string DomainName,
    string QueryClass = null,
    string QueryType = null,
    string[] Rcodes = null,
    string TransportProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryClass">QueryClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryType">QueryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.rcodes">Rcodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.transportProtocol">TransportProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}.

---

##### `QueryClass`<sup>Optional</sup> <a name="QueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryClass"></a>

```csharp
public string QueryClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}.

---

##### `QueryType`<sup>Optional</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryType"></a>

```csharp
public string QueryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}.

---

##### `Rcodes`<sup>Optional</sup> <a name="Rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.rcodes"></a>

```csharp
public string[] Rcodes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}.

---

##### `TransportProtocol`<sup>Optional</sup> <a name="TransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.transportProtocol"></a>

```csharp
public string TransportProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}.

---

### NetworkLoadBalancerBackendSetTimeouts <a name="NetworkLoadBalancerBackendSetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerBackendSetBackendsList <a name="NetworkLoadBalancerBackendSetBackendsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetBackendsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get"></a>

```csharp
private NetworkLoadBalancerBackendSetBackendsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkLoadBalancerBackendSetBackendsOutputReference <a name="NetworkLoadBalancerBackendSetBackendsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetBackendsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup">IsBackup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain">IsDrain</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline">IsOffline</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends">NetworkLoadBalancerBackendSetBackends</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IsBackup`<sup>Required</sup> <a name="IsBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup"></a>

```csharp
public IResolvable IsBackup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDrain`<sup>Required</sup> <a name="IsDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain"></a>

```csharp
public IResolvable IsDrain { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsOffline`<sup>Required</sup> <a name="IsOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline"></a>

```csharp
public IResolvable IsOffline { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue"></a>

```csharp
public NetworkLoadBalancerBackendSetBackends InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends">NetworkLoadBalancerBackendSetBackends</a>

---


### NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference <a name="NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryClass">ResetQueryClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryType">ResetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetRcodes">ResetRcodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetTransportProtocol">ResetTransportProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryClass` <a name="ResetQueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryClass"></a>

```csharp
private void ResetQueryClass()
```

##### `ResetQueryType` <a name="ResetQueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryType"></a>

```csharp
private void ResetQueryType()
```

##### `ResetRcodes` <a name="ResetRcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetRcodes"></a>

```csharp
private void ResetRcodes()
```

##### `ResetTransportProtocol` <a name="ResetTransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetTransportProtocol"></a>

```csharp
private void ResetTransportProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClassInput">QueryClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryTypeInput">QueryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodesInput">RcodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocolInput">TransportProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass">QueryClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType">QueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes">Rcodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol">TransportProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `QueryClassInput`<sup>Optional</sup> <a name="QueryClassInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClassInput"></a>

```csharp
public string QueryClassInput { get; }
```

- *Type:* string

---

##### `QueryTypeInput`<sup>Optional</sup> <a name="QueryTypeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryTypeInput"></a>

```csharp
public string QueryTypeInput { get; }
```

- *Type:* string

---

##### `RcodesInput`<sup>Optional</sup> <a name="RcodesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodesInput"></a>

```csharp
public string[] RcodesInput { get; }
```

- *Type:* string[]

---

##### `TransportProtocolInput`<sup>Optional</sup> <a name="TransportProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocolInput"></a>

```csharp
public string TransportProtocolInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `QueryClass`<sup>Required</sup> <a name="QueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass"></a>

```csharp
public string QueryClass { get; }
```

- *Type:* string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType"></a>

```csharp
public string QueryType { get; }
```

- *Type:* string

---

##### `Rcodes`<sup>Required</sup> <a name="Rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes"></a>

```csharp
public string[] Rcodes { get; }
```

- *Type:* string[]

---

##### `TransportProtocol`<sup>Required</sup> <a name="TransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```csharp
public string TransportProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue"></a>

```csharp
public NetworkLoadBalancerBackendSetHealthCheckerDns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---


### NetworkLoadBalancerBackendSetHealthCheckerOutputReference <a name="NetworkLoadBalancerBackendSetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetHealthCheckerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetIntervalInMillis">ResetIntervalInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRequestData">ResetRequestData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseBodyRegex">ResetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseData">ResetResponseData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetReturnCode">ResetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetTimeoutInMillis">ResetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetUrlPath">ResetUrlPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns"></a>

```csharp
private void PutDns(NetworkLoadBalancerBackendSetHealthCheckerDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---

##### `ResetDns` <a name="ResetDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetDns"></a>

```csharp
private void ResetDns()
```

##### `ResetIntervalInMillis` <a name="ResetIntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetIntervalInMillis"></a>

```csharp
private void ResetIntervalInMillis()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRequestData` <a name="ResetRequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRequestData"></a>

```csharp
private void ResetRequestData()
```

##### `ResetResponseBodyRegex` <a name="ResetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```csharp
private void ResetResponseBodyRegex()
```

##### `ResetResponseData` <a name="ResetResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseData"></a>

```csharp
private void ResetResponseData()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetReturnCode` <a name="ResetReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetReturnCode"></a>

```csharp
private void ResetReturnCode()
```

##### `ResetTimeoutInMillis` <a name="ResetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```csharp
private void ResetTimeoutInMillis()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetUrlPath"></a>

```csharp
private void ResetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference">NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillisInput">IntervalInMillisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestDataInput">RequestDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegexInput">ResponseBodyRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseDataInput">ResponseDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCodeInput">ReturnCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillisInput">TimeoutInMillisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPathInput">UrlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis">IntervalInMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData">RequestData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData">ResponseData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode">ReturnCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns"></a>

```csharp
public NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference Dns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference">NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dnsInput"></a>

```csharp
public NetworkLoadBalancerBackendSetHealthCheckerDns DnsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---

##### `IntervalInMillisInput`<sup>Optional</sup> <a name="IntervalInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillisInput"></a>

```csharp
public double IntervalInMillisInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RequestDataInput`<sup>Optional</sup> <a name="RequestDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestDataInput"></a>

```csharp
public string RequestDataInput { get; }
```

- *Type:* string

---

##### `ResponseBodyRegexInput`<sup>Optional</sup> <a name="ResponseBodyRegexInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```csharp
public string ResponseBodyRegexInput { get; }
```

- *Type:* string

---

##### `ResponseDataInput`<sup>Optional</sup> <a name="ResponseDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseDataInput"></a>

```csharp
public string ResponseDataInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `ReturnCodeInput`<sup>Optional</sup> <a name="ReturnCodeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCodeInput"></a>

```csharp
public double ReturnCodeInput { get; }
```

- *Type:* double

---

##### `TimeoutInMillisInput`<sup>Optional</sup> <a name="TimeoutInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```csharp
public double TimeoutInMillisInput { get; }
```

- *Type:* double

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPathInput"></a>

```csharp
public string UrlPathInput { get; }
```

- *Type:* string

---

##### `IntervalInMillis`<sup>Required</sup> <a name="IntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis"></a>

```csharp
public double IntervalInMillis { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RequestData`<sup>Required</sup> <a name="RequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData"></a>

```csharp
public string RequestData { get; }
```

- *Type:* string

---

##### `ResponseBodyRegex`<sup>Required</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```csharp
public string ResponseBodyRegex { get; }
```

- *Type:* string

---

##### `ResponseData`<sup>Required</sup> <a name="ResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData"></a>

```csharp
public string ResponseData { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `ReturnCode`<sup>Required</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode"></a>

```csharp
public double ReturnCode { get; }
```

- *Type:* double

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```csharp
public double TimeoutInMillis { get; }
```

- *Type:* double

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue"></a>

```csharp
public NetworkLoadBalancerBackendSetHealthChecker InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---


### NetworkLoadBalancerBackendSetTimeoutsOutputReference <a name="NetworkLoadBalancerBackendSetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkLoadBalancerBackendSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



