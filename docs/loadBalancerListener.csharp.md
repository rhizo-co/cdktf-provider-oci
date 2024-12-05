# `loadBalancerListener` Submodule <a name="`loadBalancerListener` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListener <a name="LoadBalancerListener" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener oci_load_balancer_listener}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerListener(Construct Scope, string Id, LoadBalancerListenerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig">LoadBalancerListenerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig">LoadBalancerListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration">PutConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration">PutSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration">ResetConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames">ResetHostnameNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName">ResetPathRouteSetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName">ResetRoutingPolicyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames">ResetRuleSetNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration">ResetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionConfiguration` <a name="PutConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration"></a>

```csharp
private void PutConnectionConfiguration(LoadBalancerListenerConnectionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `PutSslConfiguration` <a name="PutSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration"></a>

```csharp
private void PutSslConfiguration(LoadBalancerListenerSslConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts"></a>

```csharp
private void PutTimeouts(LoadBalancerListenerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

---

##### `ResetConnectionConfiguration` <a name="ResetConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration"></a>

```csharp
private void ResetConnectionConfiguration()
```

##### `ResetHostnameNames` <a name="ResetHostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames"></a>

```csharp
private void ResetHostnameNames()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPathRouteSetName` <a name="ResetPathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName"></a>

```csharp
private void ResetPathRouteSetName()
```

##### `ResetRoutingPolicyName` <a name="ResetRoutingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName"></a>

```csharp
private void ResetRoutingPolicyName()
```

##### `ResetRuleSetNames` <a name="ResetRuleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames"></a>

```csharp
private void ResetRuleSetNames()
```

##### `ResetSslConfiguration` <a name="ResetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration"></a>

```csharp
private void ResetSslConfiguration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LoadBalancerListener.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LoadBalancerListener.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LoadBalancerListener.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LoadBalancerListener.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerListener to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput">ConnectionConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput">DefaultBackendSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput">HostnameNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput">PathRouteSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput">RoutingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput">RuleSetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput">SslConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName">DefaultBackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames">HostnameNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName">PathRouteSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName">RoutingPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames">RuleSetNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration"></a>

```csharp
public LoadBalancerListenerConnectionConfigurationOutputReference ConnectionConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a>

---

##### `SslConfiguration`<sup>Required</sup> <a name="SslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration"></a>

```csharp
public LoadBalancerListenerSslConfigurationOutputReference SslConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts"></a>

```csharp
public LoadBalancerListenerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a>

---

##### `ConnectionConfigurationInput`<sup>Optional</sup> <a name="ConnectionConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput"></a>

```csharp
public LoadBalancerListenerConnectionConfiguration ConnectionConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `DefaultBackendSetNameInput`<sup>Optional</sup> <a name="DefaultBackendSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput"></a>

```csharp
public string DefaultBackendSetNameInput { get; }
```

- *Type:* string

---

##### `HostnameNamesInput`<sup>Optional</sup> <a name="HostnameNamesInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput"></a>

```csharp
public string[] HostnameNamesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathRouteSetNameInput`<sup>Optional</sup> <a name="PathRouteSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput"></a>

```csharp
public string PathRouteSetNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RoutingPolicyNameInput`<sup>Optional</sup> <a name="RoutingPolicyNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput"></a>

```csharp
public string RoutingPolicyNameInput { get; }
```

- *Type:* string

---

##### `RuleSetNamesInput`<sup>Optional</sup> <a name="RuleSetNamesInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput"></a>

```csharp
public string[] RuleSetNamesInput { get; }
```

- *Type:* string[]

---

##### `SslConfigurationInput`<sup>Optional</sup> <a name="SslConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput"></a>

```csharp
public LoadBalancerListenerSslConfiguration SslConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefaultBackendSetName`<sup>Required</sup> <a name="DefaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName"></a>

```csharp
public string DefaultBackendSetName { get; }
```

- *Type:* string

---

##### `HostnameNames`<sup>Required</sup> <a name="HostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames"></a>

```csharp
public string[] HostnameNames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PathRouteSetName`<sup>Required</sup> <a name="PathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName"></a>

```csharp
public string PathRouteSetName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RoutingPolicyName`<sup>Required</sup> <a name="RoutingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName"></a>

```csharp
public string RoutingPolicyName { get; }
```

- *Type:* string

---

##### `RuleSetNames`<sup>Required</sup> <a name="RuleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames"></a>

```csharp
public string[] RuleSetNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerConfig <a name="LoadBalancerListenerConfig" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerListenerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultBackendSetName,
    string LoadBalancerId,
    string Name,
    double Port,
    string Protocol,
    LoadBalancerListenerConnectionConfiguration ConnectionConfiguration = null,
    string[] HostnameNames = null,
    string Id = null,
    string PathRouteSetName = null,
    string RoutingPolicyName = null,
    string[] RuleSetNames = null,
    LoadBalancerListenerSslConfiguration SslConfiguration = null,
    LoadBalancerListenerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName">DefaultBackendSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames">HostnameNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName">PathRouteSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName">RoutingPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames">RuleSetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultBackendSetName`<sup>Required</sup> <a name="DefaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName"></a>

```csharp
public string DefaultBackendSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}.

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}.

---

##### `ConnectionConfiguration`<sup>Optional</sup> <a name="ConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration"></a>

```csharp
public LoadBalancerListenerConnectionConfiguration ConnectionConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#connection_configuration LoadBalancerListener#connection_configuration}

---

##### `HostnameNames`<sup>Optional</sup> <a name="HostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames"></a>

```csharp
public string[] HostnameNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PathRouteSetName`<sup>Optional</sup> <a name="PathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName"></a>

```csharp
public string PathRouteSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}.

---

##### `RoutingPolicyName`<sup>Optional</sup> <a name="RoutingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName"></a>

```csharp
public string RoutingPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}.

---

##### `RuleSetNames`<sup>Optional</sup> <a name="RuleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames"></a>

```csharp
public string[] RuleSetNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}.

---

##### `SslConfiguration`<sup>Optional</sup> <a name="SslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration"></a>

```csharp
public LoadBalancerListenerSslConfiguration SslConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#ssl_configuration LoadBalancerListener#ssl_configuration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts"></a>

```csharp
public LoadBalancerListenerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#timeouts LoadBalancerListener#timeouts}

---

### LoadBalancerListenerConnectionConfiguration <a name="LoadBalancerListenerConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerListenerConnectionConfiguration {
    string IdleTimeoutInSeconds,
    string[] BackendTcpProxyProtocolOptions = null,
    double BackendTcpProxyProtocolVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds">IdleTimeoutInSeconds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions">BackendTcpProxyProtocolOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion">BackendTcpProxyProtocolVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}. |

---

##### `IdleTimeoutInSeconds`<sup>Required</sup> <a name="IdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds"></a>

```csharp
public string IdleTimeoutInSeconds { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}.

---

##### `BackendTcpProxyProtocolOptions`<sup>Optional</sup> <a name="BackendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions"></a>

```csharp
public string[] BackendTcpProxyProtocolOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}.

---

##### `BackendTcpProxyProtocolVersion`<sup>Optional</sup> <a name="BackendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion"></a>

```csharp
public double BackendTcpProxyProtocolVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}.

---

### LoadBalancerListenerSslConfiguration <a name="LoadBalancerListenerSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerListenerSslConfiguration {
    string[] CertificateIds = null,
    string CertificateName = null,
    string CipherSuiteName = null,
    object HasSessionResumption = null,
    string[] Protocols = null,
    string ServerOrderPreference = null,
    string[] TrustedCertificateAuthorityIds = null,
    double VerifyDepth = null,
    object VerifyPeerCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds">CertificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName">CertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName">CipherSuiteName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption">HasSessionResumption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds">TrustedCertificateAuthorityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth">VerifyDepth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate">VerifyPeerCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}. |

---

##### `CertificateIds`<sup>Optional</sup> <a name="CertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds"></a>

```csharp
public string[] CertificateIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}.

---

##### `CipherSuiteName`<sup>Optional</sup> <a name="CipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName"></a>

```csharp
public string CipherSuiteName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}.

---

##### `HasSessionResumption`<sup>Optional</sup> <a name="HasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption"></a>

```csharp
public object HasSessionResumption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}.

---

##### `ServerOrderPreference`<sup>Optional</sup> <a name="ServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference"></a>

```csharp
public string ServerOrderPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}.

---

##### `TrustedCertificateAuthorityIds`<sup>Optional</sup> <a name="TrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```csharp
public string[] TrustedCertificateAuthorityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}.

---

##### `VerifyDepth`<sup>Optional</sup> <a name="VerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth"></a>

```csharp
public double VerifyDepth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}.

---

##### `VerifyPeerCertificate`<sup>Optional</sup> <a name="VerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate"></a>

```csharp
public object VerifyPeerCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}.

---

### LoadBalancerListenerTimeouts <a name="LoadBalancerListenerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerListenerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerListenerConnectionConfigurationOutputReference <a name="LoadBalancerListenerConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerListenerConnectionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions">ResetBackendTcpProxyProtocolOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion">ResetBackendTcpProxyProtocolVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendTcpProxyProtocolOptions` <a name="ResetBackendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions"></a>

```csharp
private void ResetBackendTcpProxyProtocolOptions()
```

##### `ResetBackendTcpProxyProtocolVersion` <a name="ResetBackendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion"></a>

```csharp
private void ResetBackendTcpProxyProtocolVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput">BackendTcpProxyProtocolOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput">BackendTcpProxyProtocolVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput">IdleTimeoutInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions">BackendTcpProxyProtocolOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion">BackendTcpProxyProtocolVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds">IdleTimeoutInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendTcpProxyProtocolOptionsInput`<sup>Optional</sup> <a name="BackendTcpProxyProtocolOptionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput"></a>

```csharp
public string[] BackendTcpProxyProtocolOptionsInput { get; }
```

- *Type:* string[]

---

##### `BackendTcpProxyProtocolVersionInput`<sup>Optional</sup> <a name="BackendTcpProxyProtocolVersionInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput"></a>

```csharp
public double BackendTcpProxyProtocolVersionInput { get; }
```

- *Type:* double

---

##### `IdleTimeoutInSecondsInput`<sup>Optional</sup> <a name="IdleTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput"></a>

```csharp
public string IdleTimeoutInSecondsInput { get; }
```

- *Type:* string

---

##### `BackendTcpProxyProtocolOptions`<sup>Required</sup> <a name="BackendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions"></a>

```csharp
public string[] BackendTcpProxyProtocolOptions { get; }
```

- *Type:* string[]

---

##### `BackendTcpProxyProtocolVersion`<sup>Required</sup> <a name="BackendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion"></a>

```csharp
public double BackendTcpProxyProtocolVersion { get; }
```

- *Type:* double

---

##### `IdleTimeoutInSeconds`<sup>Required</sup> <a name="IdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds"></a>

```csharp
public string IdleTimeoutInSeconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue"></a>

```csharp
public LoadBalancerListenerConnectionConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---


### LoadBalancerListenerSslConfigurationOutputReference <a name="LoadBalancerListenerSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerListenerSslConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds">ResetCertificateIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName">ResetCipherSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption">ResetHasSessionResumption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference">ResetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">ResetTrustedCertificateAuthorityIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth">ResetVerifyDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate">ResetVerifyPeerCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateIds` <a name="ResetCertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds"></a>

```csharp
private void ResetCertificateIds()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName"></a>

```csharp
private void ResetCertificateName()
```

##### `ResetCipherSuiteName` <a name="ResetCipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName"></a>

```csharp
private void ResetCipherSuiteName()
```

##### `ResetHasSessionResumption` <a name="ResetHasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption"></a>

```csharp
private void ResetHasSessionResumption()
```

##### `ResetProtocols` <a name="ResetProtocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetServerOrderPreference` <a name="ResetServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference"></a>

```csharp
private void ResetServerOrderPreference()
```

##### `ResetTrustedCertificateAuthorityIds` <a name="ResetTrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```csharp
private void ResetTrustedCertificateAuthorityIds()
```

##### `ResetVerifyDepth` <a name="ResetVerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth"></a>

```csharp
private void ResetVerifyDepth()
```

##### `ResetVerifyPeerCertificate` <a name="ResetVerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```csharp
private void ResetVerifyPeerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput">CertificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput">CipherSuiteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput">HasSessionResumptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput">ServerOrderPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">TrustedCertificateAuthorityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput">VerifyDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput">VerifyPeerCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds">CertificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName">CipherSuiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption">HasSessionResumption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">TrustedCertificateAuthorityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth">VerifyDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate">VerifyPeerCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateIdsInput`<sup>Optional</sup> <a name="CertificateIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput"></a>

```csharp
public string[] CertificateIdsInput { get; }
```

- *Type:* string[]

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `CipherSuiteNameInput`<sup>Optional</sup> <a name="CipherSuiteNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```csharp
public string CipherSuiteNameInput { get; }
```

- *Type:* string

---

##### `HasSessionResumptionInput`<sup>Optional</sup> <a name="HasSessionResumptionInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput"></a>

```csharp
public object HasSessionResumptionInput { get; }
```

- *Type:* object

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `ServerOrderPreferenceInput`<sup>Optional</sup> <a name="ServerOrderPreferenceInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```csharp
public string ServerOrderPreferenceInput { get; }
```

- *Type:* string

---

##### `TrustedCertificateAuthorityIdsInput`<sup>Optional</sup> <a name="TrustedCertificateAuthorityIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```csharp
public string[] TrustedCertificateAuthorityIdsInput { get; }
```

- *Type:* string[]

---

##### `VerifyDepthInput`<sup>Optional</sup> <a name="VerifyDepthInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput"></a>

```csharp
public double VerifyDepthInput { get; }
```

- *Type:* double

---

##### `VerifyPeerCertificateInput`<sup>Optional</sup> <a name="VerifyPeerCertificateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```csharp
public object VerifyPeerCertificateInput { get; }
```

- *Type:* object

---

##### `CertificateIds`<sup>Required</sup> <a name="CertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds"></a>

```csharp
public string[] CertificateIds { get; }
```

- *Type:* string[]

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `CipherSuiteName`<sup>Required</sup> <a name="CipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName"></a>

```csharp
public string CipherSuiteName { get; }
```

- *Type:* string

---

##### `HasSessionResumption`<sup>Required</sup> <a name="HasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption"></a>

```csharp
public object HasSessionResumption { get; }
```

- *Type:* object

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `ServerOrderPreference`<sup>Required</sup> <a name="ServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference"></a>

```csharp
public string ServerOrderPreference { get; }
```

- *Type:* string

---

##### `TrustedCertificateAuthorityIds`<sup>Required</sup> <a name="TrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```csharp
public string[] TrustedCertificateAuthorityIds { get; }
```

- *Type:* string[]

---

##### `VerifyDepth`<sup>Required</sup> <a name="VerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth"></a>

```csharp
public double VerifyDepth { get; }
```

- *Type:* double

---

##### `VerifyPeerCertificate`<sup>Required</sup> <a name="VerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```csharp
public object VerifyPeerCertificate { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue"></a>

```csharp
public LoadBalancerListenerSslConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---


### LoadBalancerListenerTimeoutsOutputReference <a name="LoadBalancerListenerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerListenerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



