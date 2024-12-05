# `identityAuthenticationPolicy` Submodule <a name="`identityAuthenticationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityAuthenticationPolicy <a name="IdentityAuthenticationPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy oci_identity_authentication_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityAuthenticationPolicy(Construct Scope, string Id, IdentityAuthenticationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig">IdentityAuthenticationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig">IdentityAuthenticationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy">PutNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy">PutPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy">ResetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkPolicy` <a name="PutNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy"></a>

```csharp
private void PutNetworkPolicy(IdentityAuthenticationPolicyNetworkPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `PutPasswordPolicy` <a name="PutPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy"></a>

```csharp
private void PutPasswordPolicy(IdentityAuthenticationPolicyPasswordPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityAuthenticationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkPolicy` <a name="ResetNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy"></a>

```csharp
private void ResetNetworkPolicy()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityAuthenticationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityAuthenticationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityAuthenticationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityAuthenticationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityAuthenticationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityAuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityAuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy">NetworkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput">NetworkPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy"></a>

```csharp
public IdentityAuthenticationPolicyNetworkPolicyOutputReference NetworkPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a>

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy"></a>

```csharp
public IdentityAuthenticationPolicyPasswordPolicyOutputReference PasswordPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts"></a>

```csharp
public IdentityAuthenticationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkPolicyInput`<sup>Optional</sup> <a name="NetworkPolicyInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput"></a>

```csharp
public IdentityAuthenticationPolicyNetworkPolicy NetworkPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput"></a>

```csharp
public IdentityAuthenticationPolicyPasswordPolicy PasswordPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityAuthenticationPolicyConfig <a name="IdentityAuthenticationPolicyConfig" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityAuthenticationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Id = null,
    IdentityAuthenticationPolicyNetworkPolicy NetworkPolicy = null,
    IdentityAuthenticationPolicyPasswordPolicy PasswordPolicy = null,
    IdentityAuthenticationPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy">NetworkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | network_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkPolicy`<sup>Optional</sup> <a name="NetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy"></a>

```csharp
public IdentityAuthenticationPolicyNetworkPolicy NetworkPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

network_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_policy IdentityAuthenticationPolicy#network_policy}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy"></a>

```csharp
public IdentityAuthenticationPolicyPasswordPolicy PasswordPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#password_policy IdentityAuthenticationPolicy#password_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts"></a>

```csharp
public IdentityAuthenticationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#timeouts IdentityAuthenticationPolicy#timeouts}

---

### IdentityAuthenticationPolicyNetworkPolicy <a name="IdentityAuthenticationPolicyNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityAuthenticationPolicyNetworkPolicy {
    string[] NetworkSourceIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds">NetworkSourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}. |

---

##### `NetworkSourceIds`<sup>Optional</sup> <a name="NetworkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds"></a>

```csharp
public string[] NetworkSourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}.

---

### IdentityAuthenticationPolicyPasswordPolicy <a name="IdentityAuthenticationPolicyPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityAuthenticationPolicyPasswordPolicy {
    object IsLowercaseCharactersRequired = null,
    object IsNumericCharactersRequired = null,
    object IsSpecialCharactersRequired = null,
    object IsUppercaseCharactersRequired = null,
    object IsUsernameContainmentAllowed = null,
    double MinimumPasswordLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired">IsLowercaseCharactersRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired">IsNumericCharactersRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired">IsSpecialCharactersRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired">IsUppercaseCharactersRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed">IsUsernameContainmentAllowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}. |

---

##### `IsLowercaseCharactersRequired`<sup>Optional</sup> <a name="IsLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired"></a>

```csharp
public object IsLowercaseCharactersRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}.

---

##### `IsNumericCharactersRequired`<sup>Optional</sup> <a name="IsNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired"></a>

```csharp
public object IsNumericCharactersRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}.

---

##### `IsSpecialCharactersRequired`<sup>Optional</sup> <a name="IsSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired"></a>

```csharp
public object IsSpecialCharactersRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}.

---

##### `IsUppercaseCharactersRequired`<sup>Optional</sup> <a name="IsUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired"></a>

```csharp
public object IsUppercaseCharactersRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}.

---

##### `IsUsernameContainmentAllowed`<sup>Optional</sup> <a name="IsUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed"></a>

```csharp
public object IsUsernameContainmentAllowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}.

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength"></a>

```csharp
public double MinimumPasswordLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}.

---

### IdentityAuthenticationPolicyTimeouts <a name="IdentityAuthenticationPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityAuthenticationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityAuthenticationPolicyNetworkPolicyOutputReference <a name="IdentityAuthenticationPolicyNetworkPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityAuthenticationPolicyNetworkPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds">ResetNetworkSourceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkSourceIds` <a name="ResetNetworkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds"></a>

```csharp
private void ResetNetworkSourceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput">NetworkSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds">NetworkSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkSourceIdsInput`<sup>Optional</sup> <a name="NetworkSourceIdsInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput"></a>

```csharp
public string[] NetworkSourceIdsInput { get; }
```

- *Type:* string[]

---

##### `NetworkSourceIds`<sup>Required</sup> <a name="NetworkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds"></a>

```csharp
public string[] NetworkSourceIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue"></a>

```csharp
public IdentityAuthenticationPolicyNetworkPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---


### IdentityAuthenticationPolicyPasswordPolicyOutputReference <a name="IdentityAuthenticationPolicyPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityAuthenticationPolicyPasswordPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired">ResetIsLowercaseCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired">ResetIsNumericCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired">ResetIsSpecialCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired">ResetIsUppercaseCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed">ResetIsUsernameContainmentAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsLowercaseCharactersRequired` <a name="ResetIsLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired"></a>

```csharp
private void ResetIsLowercaseCharactersRequired()
```

##### `ResetIsNumericCharactersRequired` <a name="ResetIsNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired"></a>

```csharp
private void ResetIsNumericCharactersRequired()
```

##### `ResetIsSpecialCharactersRequired` <a name="ResetIsSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired"></a>

```csharp
private void ResetIsSpecialCharactersRequired()
```

##### `ResetIsUppercaseCharactersRequired` <a name="ResetIsUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired"></a>

```csharp
private void ResetIsUppercaseCharactersRequired()
```

##### `ResetIsUsernameContainmentAllowed` <a name="ResetIsUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed"></a>

```csharp
private void ResetIsUsernameContainmentAllowed()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength"></a>

```csharp
private void ResetMinimumPasswordLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput">IsLowercaseCharactersRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput">IsNumericCharactersRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput">IsSpecialCharactersRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput">IsUppercaseCharactersRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput">IsUsernameContainmentAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired">IsLowercaseCharactersRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired">IsNumericCharactersRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired">IsSpecialCharactersRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired">IsUppercaseCharactersRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed">IsUsernameContainmentAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsLowercaseCharactersRequiredInput`<sup>Optional</sup> <a name="IsLowercaseCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput"></a>

```csharp
public object IsLowercaseCharactersRequiredInput { get; }
```

- *Type:* object

---

##### `IsNumericCharactersRequiredInput`<sup>Optional</sup> <a name="IsNumericCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput"></a>

```csharp
public object IsNumericCharactersRequiredInput { get; }
```

- *Type:* object

---

##### `IsSpecialCharactersRequiredInput`<sup>Optional</sup> <a name="IsSpecialCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput"></a>

```csharp
public object IsSpecialCharactersRequiredInput { get; }
```

- *Type:* object

---

##### `IsUppercaseCharactersRequiredInput`<sup>Optional</sup> <a name="IsUppercaseCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput"></a>

```csharp
public object IsUppercaseCharactersRequiredInput { get; }
```

- *Type:* object

---

##### `IsUsernameContainmentAllowedInput`<sup>Optional</sup> <a name="IsUsernameContainmentAllowedInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput"></a>

```csharp
public object IsUsernameContainmentAllowedInput { get; }
```

- *Type:* object

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput"></a>

```csharp
public double MinimumPasswordLengthInput { get; }
```

- *Type:* double

---

##### `IsLowercaseCharactersRequired`<sup>Required</sup> <a name="IsLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired"></a>

```csharp
public object IsLowercaseCharactersRequired { get; }
```

- *Type:* object

---

##### `IsNumericCharactersRequired`<sup>Required</sup> <a name="IsNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired"></a>

```csharp
public object IsNumericCharactersRequired { get; }
```

- *Type:* object

---

##### `IsSpecialCharactersRequired`<sup>Required</sup> <a name="IsSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired"></a>

```csharp
public object IsSpecialCharactersRequired { get; }
```

- *Type:* object

---

##### `IsUppercaseCharactersRequired`<sup>Required</sup> <a name="IsUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired"></a>

```csharp
public object IsUppercaseCharactersRequired { get; }
```

- *Type:* object

---

##### `IsUsernameContainmentAllowed`<sup>Required</sup> <a name="IsUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed"></a>

```csharp
public object IsUsernameContainmentAllowed { get; }
```

- *Type:* object

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength"></a>

```csharp
public double MinimumPasswordLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue"></a>

```csharp
public IdentityAuthenticationPolicyPasswordPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---


### IdentityAuthenticationPolicyTimeoutsOutputReference <a name="IdentityAuthenticationPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityAuthenticationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



