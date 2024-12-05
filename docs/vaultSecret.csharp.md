# `vaultSecret` Submodule <a name="`vaultSecret` Submodule" id="rhizo-co-terraform-provider-oci.vaultSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecret <a name="VaultSecret" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret oci_vault_secret}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecret(Construct Scope, string Id, VaultSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig">VaultSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig">VaultSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig">PutRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent">PutSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules">PutSecretRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetRotationConfig">ResetRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretContent">ResetSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretRules">ResetSecretRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRotationConfig` <a name="PutRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig"></a>

```csharp
private void PutRotationConfig(VaultSecretRotationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---

##### `PutSecretContent` <a name="PutSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent"></a>

```csharp
private void PutSecretContent(VaultSecretSecretContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---

##### `PutSecretRules` <a name="PutSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules"></a>

```csharp
private void PutSecretRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts"></a>

```csharp
private void PutTimeouts(VaultSecretTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetRotationConfig` <a name="ResetRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetRotationConfig"></a>

```csharp
private void ResetRotationConfig()
```

##### `ResetSecretContent` <a name="ResetSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretContent"></a>

```csharp
private void ResetSecretContent()
```

##### `ResetSecretRules` <a name="ResetSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretRules"></a>

```csharp
private void ResetSecretRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VaultSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VaultSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VaultSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VaultSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.currentVersionNumber">CurrentVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lastRotationTime">LastRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfig">RotationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference">VaultSecretRotationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationStatus">RotationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContent">SecretContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference">VaultSecretSecretContentOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRules">SecretRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList">VaultSecretSecretRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfCurrentVersionExpiry">TimeOfCurrentVersionExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference">VaultSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfigInput">RotationConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContentInput">SecretContentInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRulesInput">SecretRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CurrentVersionNumber`<sup>Required</sup> <a name="CurrentVersionNumber" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.currentVersionNumber"></a>

```csharp
public string CurrentVersionNumber { get; }
```

- *Type:* string

---

##### `LastRotationTime`<sup>Required</sup> <a name="LastRotationTime" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lastRotationTime"></a>

```csharp
public string LastRotationTime { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; }
```

- *Type:* string

---

##### `RotationConfig`<sup>Required</sup> <a name="RotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfig"></a>

```csharp
public VaultSecretRotationConfigOutputReference RotationConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference">VaultSecretRotationConfigOutputReference</a>

---

##### `RotationStatus`<sup>Required</sup> <a name="RotationStatus" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationStatus"></a>

```csharp
public string RotationStatus { get; }
```

- *Type:* string

---

##### `SecretContent`<sup>Required</sup> <a name="SecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContent"></a>

```csharp
public VaultSecretSecretContentOutputReference SecretContent { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference">VaultSecretSecretContentOutputReference</a>

---

##### `SecretRules`<sup>Required</sup> <a name="SecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRules"></a>

```csharp
public VaultSecretSecretRulesList SecretRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList">VaultSecretSecretRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfCurrentVersionExpiry`<sup>Required</sup> <a name="TimeOfCurrentVersionExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfCurrentVersionExpiry"></a>

```csharp
public string TimeOfCurrentVersionExpiry { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeouts"></a>

```csharp
public VaultSecretTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference">VaultSecretTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RotationConfigInput`<sup>Optional</sup> <a name="RotationConfigInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfigInput"></a>

```csharp
public VaultSecretRotationConfig RotationConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---

##### `SecretContentInput`<sup>Optional</sup> <a name="SecretContentInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContentInput"></a>

```csharp
public VaultSecretSecretContent SecretContentInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `SecretRulesInput`<sup>Optional</sup> <a name="SecretRulesInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRulesInput"></a>

```csharp
public object SecretRulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretConfig <a name="VaultSecretConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string KeyId,
    string SecretName,
    string VaultId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    VaultSecretRotationConfig RotationConfig = null,
    VaultSecretSecretContent SecretContent = null,
    object SecretRules = null,
    VaultSecretTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.rotationConfig">RotationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | rotation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretContent">SecretContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | secret_content block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretRules">SecretRules</a></code> | <code>object</code> | secret_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}.

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}.

---

##### `RotationConfig`<sup>Optional</sup> <a name="RotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.rotationConfig"></a>

```csharp
public VaultSecretRotationConfig RotationConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

rotation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_config VaultSecret#rotation_config}

---

##### `SecretContent`<sup>Optional</sup> <a name="SecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretContent"></a>

```csharp
public VaultSecretSecretContent SecretContent { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

secret_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_content VaultSecret#secret_content}

---

##### `SecretRules`<sup>Optional</sup> <a name="SecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretRules"></a>

```csharp
public object SecretRules { get; set; }
```

- *Type:* object

secret_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_rules VaultSecret#secret_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.timeouts"></a>

```csharp
public VaultSecretTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#timeouts VaultSecret#timeouts}

---

### VaultSecretRotationConfig <a name="VaultSecretRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretRotationConfig {
    VaultSecretRotationConfigTargetSystemDetails TargetSystemDetails,
    object IsScheduledRotationEnabled = null,
    string RotationInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.targetSystemDetails">TargetSystemDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | target_system_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.isScheduledRotationEnabled">IsScheduledRotationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.rotationInterval">RotationInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}. |

---

##### `TargetSystemDetails`<sup>Required</sup> <a name="TargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.targetSystemDetails"></a>

```csharp
public VaultSecretRotationConfigTargetSystemDetails TargetSystemDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

target_system_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_details VaultSecret#target_system_details}

---

##### `IsScheduledRotationEnabled`<sup>Optional</sup> <a name="IsScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.isScheduledRotationEnabled"></a>

```csharp
public object IsScheduledRotationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}.

---

##### `RotationInterval`<sup>Optional</sup> <a name="RotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.rotationInterval"></a>

```csharp
public string RotationInterval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}.

---

### VaultSecretRotationConfigTargetSystemDetails <a name="VaultSecretRotationConfigTargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretRotationConfigTargetSystemDetails {
    string TargetSystemType,
    string AdbId = null,
    string FunctionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.targetSystemType">TargetSystemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.adbId">AdbId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.functionId">FunctionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}. |

---

##### `TargetSystemType`<sup>Required</sup> <a name="TargetSystemType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.targetSystemType"></a>

```csharp
public string TargetSystemType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}.

---

##### `AdbId`<sup>Optional</sup> <a name="AdbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.adbId"></a>

```csharp
public string AdbId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}.

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.functionId"></a>

```csharp
public string FunctionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}.

---

### VaultSecretSecretContent <a name="VaultSecretSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretSecretContent {
    string ContentType,
    string Content = null,
    string Name = null,
    string Stage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.stage">Stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}.

---

### VaultSecretSecretRules <a name="VaultSecretSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretSecretRules {
    string RuleType,
    object IsEnforcedOnDeletedSecretVersions = null,
    object IsSecretContentRetrievalBlockedOnExpiry = null,
    string SecretVersionExpiryInterval = null,
    string TimeOfAbsoluteExpiry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.ruleType">RuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isEnforcedOnDeletedSecretVersions">IsEnforcedOnDeletedSecretVersions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isSecretContentRetrievalBlockedOnExpiry">IsSecretContentRetrievalBlockedOnExpiry</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.secretVersionExpiryInterval">SecretVersionExpiryInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.timeOfAbsoluteExpiry">TimeOfAbsoluteExpiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}. |

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.ruleType"></a>

```csharp
public string RuleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}.

---

##### `IsEnforcedOnDeletedSecretVersions`<sup>Optional</sup> <a name="IsEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isEnforcedOnDeletedSecretVersions"></a>

```csharp
public object IsEnforcedOnDeletedSecretVersions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}.

---

##### `IsSecretContentRetrievalBlockedOnExpiry`<sup>Optional</sup> <a name="IsSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isSecretContentRetrievalBlockedOnExpiry"></a>

```csharp
public object IsSecretContentRetrievalBlockedOnExpiry { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}.

---

##### `SecretVersionExpiryInterval`<sup>Optional</sup> <a name="SecretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.secretVersionExpiryInterval"></a>

```csharp
public string SecretVersionExpiryInterval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}.

---

##### `TimeOfAbsoluteExpiry`<sup>Optional</sup> <a name="TimeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.timeOfAbsoluteExpiry"></a>

```csharp
public string TimeOfAbsoluteExpiry { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}.

---

### VaultSecretTimeouts <a name="VaultSecretTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretRotationConfigOutputReference <a name="VaultSecretRotationConfigOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretRotationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails">PutTargetSystemDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetIsScheduledRotationEnabled">ResetIsScheduledRotationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetRotationInterval">ResetRotationInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetSystemDetails` <a name="PutTargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails"></a>

```csharp
private void PutTargetSystemDetails(VaultSecretRotationConfigTargetSystemDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---

##### `ResetIsScheduledRotationEnabled` <a name="ResetIsScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetIsScheduledRotationEnabled"></a>

```csharp
private void ResetIsScheduledRotationEnabled()
```

##### `ResetRotationInterval` <a name="ResetRotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetRotationInterval"></a>

```csharp
private void ResetRotationInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetails">TargetSystemDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference">VaultSecretRotationConfigTargetSystemDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabledInput">IsScheduledRotationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationIntervalInput">RotationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetailsInput">TargetSystemDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabled">IsScheduledRotationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationInterval">RotationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetSystemDetails`<sup>Required</sup> <a name="TargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetails"></a>

```csharp
public VaultSecretRotationConfigTargetSystemDetailsOutputReference TargetSystemDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference">VaultSecretRotationConfigTargetSystemDetailsOutputReference</a>

---

##### `IsScheduledRotationEnabledInput`<sup>Optional</sup> <a name="IsScheduledRotationEnabledInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabledInput"></a>

```csharp
public object IsScheduledRotationEnabledInput { get; }
```

- *Type:* object

---

##### `RotationIntervalInput`<sup>Optional</sup> <a name="RotationIntervalInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationIntervalInput"></a>

```csharp
public string RotationIntervalInput { get; }
```

- *Type:* string

---

##### `TargetSystemDetailsInput`<sup>Optional</sup> <a name="TargetSystemDetailsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetailsInput"></a>

```csharp
public VaultSecretRotationConfigTargetSystemDetails TargetSystemDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---

##### `IsScheduledRotationEnabled`<sup>Required</sup> <a name="IsScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabled"></a>

```csharp
public object IsScheduledRotationEnabled { get; }
```

- *Type:* object

---

##### `RotationInterval`<sup>Required</sup> <a name="RotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationInterval"></a>

```csharp
public string RotationInterval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.internalValue"></a>

```csharp
public VaultSecretRotationConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---


### VaultSecretRotationConfigTargetSystemDetailsOutputReference <a name="VaultSecretRotationConfigTargetSystemDetailsOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretRotationConfigTargetSystemDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetAdbId">ResetAdbId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetFunctionId">ResetFunctionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdbId` <a name="ResetAdbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetAdbId"></a>

```csharp
private void ResetAdbId()
```

##### `ResetFunctionId` <a name="ResetFunctionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetFunctionId"></a>

```csharp
private void ResetFunctionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbIdInput">AdbIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionIdInput">FunctionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemTypeInput">TargetSystemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbId">AdbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemType">TargetSystemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdbIdInput`<sup>Optional</sup> <a name="AdbIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbIdInput"></a>

```csharp
public string AdbIdInput { get; }
```

- *Type:* string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionIdInput"></a>

```csharp
public string FunctionIdInput { get; }
```

- *Type:* string

---

##### `TargetSystemTypeInput`<sup>Optional</sup> <a name="TargetSystemTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemTypeInput"></a>

```csharp
public string TargetSystemTypeInput { get; }
```

- *Type:* string

---

##### `AdbId`<sup>Required</sup> <a name="AdbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbId"></a>

```csharp
public string AdbId { get; }
```

- *Type:* string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `TargetSystemType`<sup>Required</sup> <a name="TargetSystemType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemType"></a>

```csharp
public string TargetSystemType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.internalValue"></a>

```csharp
public VaultSecretRotationConfigTargetSystemDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---


### VaultSecretSecretContentOutputReference <a name="VaultSecretSecretContentOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretSecretContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStage` <a name="ResetStage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetStage"></a>

```csharp
private void ResetStage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.internalValue"></a>

```csharp
public VaultSecretSecretContent InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---


### VaultSecretSecretRulesList <a name="VaultSecretSecretRulesList" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretSecretRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get"></a>

```csharp
private VaultSecretSecretRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretSecretRulesOutputReference <a name="VaultSecretSecretRulesOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretSecretRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsEnforcedOnDeletedSecretVersions">ResetIsEnforcedOnDeletedSecretVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsSecretContentRetrievalBlockedOnExpiry">ResetIsSecretContentRetrievalBlockedOnExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetSecretVersionExpiryInterval">ResetSecretVersionExpiryInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetTimeOfAbsoluteExpiry">ResetTimeOfAbsoluteExpiry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnforcedOnDeletedSecretVersions` <a name="ResetIsEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsEnforcedOnDeletedSecretVersions"></a>

```csharp
private void ResetIsEnforcedOnDeletedSecretVersions()
```

##### `ResetIsSecretContentRetrievalBlockedOnExpiry` <a name="ResetIsSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsSecretContentRetrievalBlockedOnExpiry"></a>

```csharp
private void ResetIsSecretContentRetrievalBlockedOnExpiry()
```

##### `ResetSecretVersionExpiryInterval` <a name="ResetSecretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetSecretVersionExpiryInterval"></a>

```csharp
private void ResetSecretVersionExpiryInterval()
```

##### `ResetTimeOfAbsoluteExpiry` <a name="ResetTimeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetTimeOfAbsoluteExpiry"></a>

```csharp
private void ResetTimeOfAbsoluteExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersionsInput">IsEnforcedOnDeletedSecretVersionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiryInput">IsSecretContentRetrievalBlockedOnExpiryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleTypeInput">RuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryIntervalInput">SecretVersionExpiryIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiryInput">TimeOfAbsoluteExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersions">IsEnforcedOnDeletedSecretVersions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiry">IsSecretContentRetrievalBlockedOnExpiry</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryInterval">SecretVersionExpiryInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiry">TimeOfAbsoluteExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnforcedOnDeletedSecretVersionsInput`<sup>Optional</sup> <a name="IsEnforcedOnDeletedSecretVersionsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersionsInput"></a>

```csharp
public object IsEnforcedOnDeletedSecretVersionsInput { get; }
```

- *Type:* object

---

##### `IsSecretContentRetrievalBlockedOnExpiryInput`<sup>Optional</sup> <a name="IsSecretContentRetrievalBlockedOnExpiryInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiryInput"></a>

```csharp
public object IsSecretContentRetrievalBlockedOnExpiryInput { get; }
```

- *Type:* object

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleTypeInput"></a>

```csharp
public string RuleTypeInput { get; }
```

- *Type:* string

---

##### `SecretVersionExpiryIntervalInput`<sup>Optional</sup> <a name="SecretVersionExpiryIntervalInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryIntervalInput"></a>

```csharp
public string SecretVersionExpiryIntervalInput { get; }
```

- *Type:* string

---

##### `TimeOfAbsoluteExpiryInput`<sup>Optional</sup> <a name="TimeOfAbsoluteExpiryInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiryInput"></a>

```csharp
public string TimeOfAbsoluteExpiryInput { get; }
```

- *Type:* string

---

##### `IsEnforcedOnDeletedSecretVersions`<sup>Required</sup> <a name="IsEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersions"></a>

```csharp
public object IsEnforcedOnDeletedSecretVersions { get; }
```

- *Type:* object

---

##### `IsSecretContentRetrievalBlockedOnExpiry`<sup>Required</sup> <a name="IsSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiry"></a>

```csharp
public object IsSecretContentRetrievalBlockedOnExpiry { get; }
```

- *Type:* object

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `SecretVersionExpiryInterval`<sup>Required</sup> <a name="SecretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryInterval"></a>

```csharp
public string SecretVersionExpiryInterval { get; }
```

- *Type:* string

---

##### `TimeOfAbsoluteExpiry`<sup>Required</sup> <a name="TimeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiry"></a>

```csharp
public string TimeOfAbsoluteExpiry { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretTimeoutsOutputReference <a name="VaultSecretTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VaultSecretTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



