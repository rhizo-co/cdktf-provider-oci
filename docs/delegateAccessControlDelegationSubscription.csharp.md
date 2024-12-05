# `delegateAccessControlDelegationSubscription` Submodule <a name="`delegateAccessControlDelegationSubscription` Submodule" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DelegateAccessControlDelegationSubscription <a name="DelegateAccessControlDelegationSubscription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription oci_delegate_access_control_delegation_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DelegateAccessControlDelegationSubscription(Construct Scope, string Id, DelegateAccessControlDelegationSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig">DelegateAccessControlDelegationSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig">DelegateAccessControlDelegationSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(DelegateAccessControlDelegationSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DelegateAccessControlDelegationSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DelegateAccessControlDelegationSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DelegateAccessControlDelegationSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DelegateAccessControlDelegationSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DelegateAccessControlDelegationSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DelegateAccessControlDelegationSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DelegateAccessControlDelegationSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DelegateAccessControlDelegationSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DelegateAccessControlDelegationSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference">DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderIdInput">ServiceProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceTypeInput">SubscribedServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderId">ServiceProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceType">SubscribedServiceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeouts"></a>

```csharp
public DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference">DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceProviderIdInput`<sup>Optional</sup> <a name="ServiceProviderIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderIdInput"></a>

```csharp
public string ServiceProviderIdInput { get; }
```

- *Type:* string

---

##### `SubscribedServiceTypeInput`<sup>Optional</sup> <a name="SubscribedServiceTypeInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceTypeInput"></a>

```csharp
public string SubscribedServiceTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceProviderId`<sup>Required</sup> <a name="ServiceProviderId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderId"></a>

```csharp
public string ServiceProviderId { get; }
```

- *Type:* string

---

##### `SubscribedServiceType`<sup>Required</sup> <a name="SubscribedServiceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceType"></a>

```csharp
public string SubscribedServiceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DelegateAccessControlDelegationSubscriptionConfig <a name="DelegateAccessControlDelegationSubscriptionConfig" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DelegateAccessControlDelegationSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ServiceProviderId,
    string SubscribedServiceType,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DelegateAccessControlDelegationSubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#compartment_id DelegateAccessControlDelegationSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.serviceProviderId">ServiceProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#service_provider_id DelegateAccessControlDelegationSubscription#service_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.subscribedServiceType">SubscribedServiceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#subscribed_service_type DelegateAccessControlDelegationSubscription#subscribed_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#defined_tags DelegateAccessControlDelegationSubscription#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#description DelegateAccessControlDelegationSubscription#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#freeform_tags DelegateAccessControlDelegationSubscription#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#id DelegateAccessControlDelegationSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#compartment_id DelegateAccessControlDelegationSubscription#compartment_id}.

---

##### `ServiceProviderId`<sup>Required</sup> <a name="ServiceProviderId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.serviceProviderId"></a>

```csharp
public string ServiceProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#service_provider_id DelegateAccessControlDelegationSubscription#service_provider_id}.

---

##### `SubscribedServiceType`<sup>Required</sup> <a name="SubscribedServiceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.subscribedServiceType"></a>

```csharp
public string SubscribedServiceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#subscribed_service_type DelegateAccessControlDelegationSubscription#subscribed_service_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#defined_tags DelegateAccessControlDelegationSubscription#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#description DelegateAccessControlDelegationSubscription#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#freeform_tags DelegateAccessControlDelegationSubscription#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#id DelegateAccessControlDelegationSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.timeouts"></a>

```csharp
public DelegateAccessControlDelegationSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#timeouts DelegateAccessControlDelegationSubscription#timeouts}

---

### DelegateAccessControlDelegationSubscriptionTimeouts <a name="DelegateAccessControlDelegationSubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DelegateAccessControlDelegationSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#create DelegateAccessControlDelegationSubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#delete DelegateAccessControlDelegationSubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#update DelegateAccessControlDelegationSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#create DelegateAccessControlDelegationSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#delete DelegateAccessControlDelegationSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#update DelegateAccessControlDelegationSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference <a name="DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



