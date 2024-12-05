# `identityUserCapabilitiesManagement` Submodule <a name="`identityUserCapabilitiesManagement` Submodule" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityUserCapabilitiesManagement <a name="IdentityUserCapabilitiesManagement" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management oci_identity_user_capabilities_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityUserCapabilitiesManagement(Construct Scope, string Id, IdentityUserCapabilitiesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig">IdentityUserCapabilitiesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig">IdentityUserCapabilitiesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseApiKeys">ResetCanUseApiKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseAuthTokens">ResetCanUseAuthTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseConsolePassword">ResetCanUseConsolePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseCustomerSecretKeys">ResetCanUseCustomerSecretKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseSmtpCredentials">ResetCanUseSmtpCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityUserCapabilitiesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

---

##### `ResetCanUseApiKeys` <a name="ResetCanUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseApiKeys"></a>

```csharp
private void ResetCanUseApiKeys()
```

##### `ResetCanUseAuthTokens` <a name="ResetCanUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseAuthTokens"></a>

```csharp
private void ResetCanUseAuthTokens()
```

##### `ResetCanUseConsolePassword` <a name="ResetCanUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseConsolePassword"></a>

```csharp
private void ResetCanUseConsolePassword()
```

##### `ResetCanUseCustomerSecretKeys` <a name="ResetCanUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseCustomerSecretKeys"></a>

```csharp
private void ResetCanUseCustomerSecretKeys()
```

##### `ResetCanUseSmtpCredentials` <a name="ResetCanUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseSmtpCredentials"></a>

```csharp
private void ResetCanUseSmtpCredentials()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityUserCapabilitiesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityUserCapabilitiesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityUserCapabilitiesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityUserCapabilitiesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityUserCapabilitiesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityUserCapabilitiesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityUserCapabilitiesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference">IdentityUserCapabilitiesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeysInput">CanUseApiKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokensInput">CanUseAuthTokensInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePasswordInput">CanUseConsolePasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeysInput">CanUseCustomerSecretKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentialsInput">CanUseSmtpCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeys">CanUseApiKeys</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokens">CanUseAuthTokens</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePassword">CanUseConsolePassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeys">CanUseCustomerSecretKeys</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentials">CanUseSmtpCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeouts"></a>

```csharp
public IdentityUserCapabilitiesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference">IdentityUserCapabilitiesManagementTimeoutsOutputReference</a>

---

##### `CanUseApiKeysInput`<sup>Optional</sup> <a name="CanUseApiKeysInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeysInput"></a>

```csharp
public object CanUseApiKeysInput { get; }
```

- *Type:* object

---

##### `CanUseAuthTokensInput`<sup>Optional</sup> <a name="CanUseAuthTokensInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokensInput"></a>

```csharp
public object CanUseAuthTokensInput { get; }
```

- *Type:* object

---

##### `CanUseConsolePasswordInput`<sup>Optional</sup> <a name="CanUseConsolePasswordInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePasswordInput"></a>

```csharp
public object CanUseConsolePasswordInput { get; }
```

- *Type:* object

---

##### `CanUseCustomerSecretKeysInput`<sup>Optional</sup> <a name="CanUseCustomerSecretKeysInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeysInput"></a>

```csharp
public object CanUseCustomerSecretKeysInput { get; }
```

- *Type:* object

---

##### `CanUseSmtpCredentialsInput`<sup>Optional</sup> <a name="CanUseSmtpCredentialsInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentialsInput"></a>

```csharp
public object CanUseSmtpCredentialsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `CanUseApiKeys`<sup>Required</sup> <a name="CanUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeys"></a>

```csharp
public object CanUseApiKeys { get; }
```

- *Type:* object

---

##### `CanUseAuthTokens`<sup>Required</sup> <a name="CanUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokens"></a>

```csharp
public object CanUseAuthTokens { get; }
```

- *Type:* object

---

##### `CanUseConsolePassword`<sup>Required</sup> <a name="CanUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePassword"></a>

```csharp
public object CanUseConsolePassword { get; }
```

- *Type:* object

---

##### `CanUseCustomerSecretKeys`<sup>Required</sup> <a name="CanUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeys"></a>

```csharp
public object CanUseCustomerSecretKeys { get; }
```

- *Type:* object

---

##### `CanUseSmtpCredentials`<sup>Required</sup> <a name="CanUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentials"></a>

```csharp
public object CanUseSmtpCredentials { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityUserCapabilitiesManagementConfig <a name="IdentityUserCapabilitiesManagementConfig" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityUserCapabilitiesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserId,
    object CanUseApiKeys = null,
    object CanUseAuthTokens = null,
    object CanUseConsolePassword = null,
    object CanUseCustomerSecretKeys = null,
    object CanUseSmtpCredentials = null,
    string Id = null,
    IdentityUserCapabilitiesManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseApiKeys">CanUseApiKeys</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseAuthTokens">CanUseAuthTokens</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseConsolePassword">CanUseConsolePassword</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseCustomerSecretKeys">CanUseCustomerSecretKeys</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseSmtpCredentials">CanUseSmtpCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}.

---

##### `CanUseApiKeys`<sup>Optional</sup> <a name="CanUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseApiKeys"></a>

```csharp
public object CanUseApiKeys { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}.

---

##### `CanUseAuthTokens`<sup>Optional</sup> <a name="CanUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseAuthTokens"></a>

```csharp
public object CanUseAuthTokens { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}.

---

##### `CanUseConsolePassword`<sup>Optional</sup> <a name="CanUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseConsolePassword"></a>

```csharp
public object CanUseConsolePassword { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}.

---

##### `CanUseCustomerSecretKeys`<sup>Optional</sup> <a name="CanUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseCustomerSecretKeys"></a>

```csharp
public object CanUseCustomerSecretKeys { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}.

---

##### `CanUseSmtpCredentials`<sup>Optional</sup> <a name="CanUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseSmtpCredentials"></a>

```csharp
public object CanUseSmtpCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.timeouts"></a>

```csharp
public IdentityUserCapabilitiesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#timeouts IdentityUserCapabilitiesManagement#timeouts}

---

### IdentityUserCapabilitiesManagementTimeouts <a name="IdentityUserCapabilitiesManagementTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityUserCapabilitiesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityUserCapabilitiesManagementTimeoutsOutputReference <a name="IdentityUserCapabilitiesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityUserCapabilitiesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



