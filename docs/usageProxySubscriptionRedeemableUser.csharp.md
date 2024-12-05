# `usageProxySubscriptionRedeemableUser` Submodule <a name="`usageProxySubscriptionRedeemableUser` Submodule" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UsageProxySubscriptionRedeemableUser <a name="UsageProxySubscriptionRedeemableUser" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user oci_usage_proxy_subscription_redeemable_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new UsageProxySubscriptionRedeemableUser(Construct Scope, string Id, UsageProxySubscriptionRedeemableUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig">UsageProxySubscriptionRedeemableUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig">UsageProxySubscriptionRedeemableUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts"></a>

```csharp
private void PutTimeouts(UsageProxySubscriptionRedeemableUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserId` <a name="ResetUserId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a UsageProxySubscriptionRedeemableUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

UsageProxySubscriptionRedeemableUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

UsageProxySubscriptionRedeemableUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

UsageProxySubscriptionRedeemableUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

UsageProxySubscriptionRedeemableUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a UsageProxySubscriptionRedeemableUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UsageProxySubscriptionRedeemableUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UsageProxySubscriptionRedeemableUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the UsageProxySubscriptionRedeemableUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList">UsageProxySubscriptionRedeemableUserItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference">UsageProxySubscriptionRedeemableUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyIdInput">TenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyId">TenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.items"></a>

```csharp
public UsageProxySubscriptionRedeemableUserItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList">UsageProxySubscriptionRedeemableUserItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeouts"></a>

```csharp
public UsageProxySubscriptionRedeemableUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference">UsageProxySubscriptionRedeemableUserTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyIdInput"></a>

```csharp
public string TenancyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyId"></a>

```csharp
public string TenancyId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UsageProxySubscriptionRedeemableUserConfig <a name="UsageProxySubscriptionRedeemableUserConfig" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new UsageProxySubscriptionRedeemableUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Items,
    string SubscriptionId,
    string TenancyId,
    string Id = null,
    UsageProxySubscriptionRedeemableUserTimeouts Timeouts = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.items">Items</a></code> | <code>object</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.tenancyId">TenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#items UsageProxySubscriptionRedeemableUser#items}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.tenancyId"></a>

```csharp
public string TenancyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.timeouts"></a>

```csharp
public UsageProxySubscriptionRedeemableUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#timeouts UsageProxySubscriptionRedeemableUser#timeouts}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}.

---

### UsageProxySubscriptionRedeemableUserItems <a name="UsageProxySubscriptionRedeemableUserItems" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new UsageProxySubscriptionRedeemableUserItems {
    string EmailId,
    string FirstName = null,
    string LastName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.emailId">EmailId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#email_id UsageProxySubscriptionRedeemableUser#email_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#first_name UsageProxySubscriptionRedeemableUser#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#last_name UsageProxySubscriptionRedeemableUser#last_name}. |

---

##### `EmailId`<sup>Required</sup> <a name="EmailId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.emailId"></a>

```csharp
public string EmailId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#email_id UsageProxySubscriptionRedeemableUser#email_id}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#first_name UsageProxySubscriptionRedeemableUser#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#last_name UsageProxySubscriptionRedeemableUser#last_name}.

---

### UsageProxySubscriptionRedeemableUserTimeouts <a name="UsageProxySubscriptionRedeemableUserTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new UsageProxySubscriptionRedeemableUserTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UsageProxySubscriptionRedeemableUserItemsList <a name="UsageProxySubscriptionRedeemableUserItemsList" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new UsageProxySubscriptionRedeemableUserItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get"></a>

```csharp
private UsageProxySubscriptionRedeemableUserItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UsageProxySubscriptionRedeemableUserItemsOutputReference <a name="UsageProxySubscriptionRedeemableUserItemsOutputReference" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new UsageProxySubscriptionRedeemableUserItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailIdInput">EmailIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailId">EmailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailIdInput`<sup>Optional</sup> <a name="EmailIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailIdInput"></a>

```csharp
public string EmailIdInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `EmailId`<sup>Required</sup> <a name="EmailId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailId"></a>

```csharp
public string EmailId { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UsageProxySubscriptionRedeemableUserTimeoutsOutputReference <a name="UsageProxySubscriptionRedeemableUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new UsageProxySubscriptionRedeemableUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



