# `identityDataPlaneGenerateScopedAccessToken` Submodule <a name="`identityDataPlaneGenerateScopedAccessToken` Submodule" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDataPlaneGenerateScopedAccessToken <a name="IdentityDataPlaneGenerateScopedAccessToken" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token oci_identity_data_plane_generate_scoped_access_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDataPlaneGenerateScopedAccessToken(Construct Scope, string Id, IdentityDataPlaneGenerateScopedAccessTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig">IdentityDataPlaneGenerateScopedAccessTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig">IdentityDataPlaneGenerateScopedAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDataPlaneGenerateScopedAccessTokenTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDataPlaneGenerateScopedAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDataPlaneGenerateScopedAccessToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDataPlaneGenerateScopedAccessToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDataPlaneGenerateScopedAccessToken.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDataPlaneGenerateScopedAccessToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDataPlaneGenerateScopedAccessToken resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDataPlaneGenerateScopedAccessToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDataPlaneGenerateScopedAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDataPlaneGenerateScopedAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference">IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeouts"></a>

```csharp
public IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference">IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDataPlaneGenerateScopedAccessTokenConfig <a name="IdentityDataPlaneGenerateScopedAccessTokenConfig" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDataPlaneGenerateScopedAccessTokenConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PublicKey,
    string Scope,
    string Id = null,
    IdentityDataPlaneGenerateScopedAccessTokenTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#public_key IdentityDataPlaneGenerateScopedAccessToken#public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#scope IdentityDataPlaneGenerateScopedAccessToken#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#id IdentityDataPlaneGenerateScopedAccessToken#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#public_key IdentityDataPlaneGenerateScopedAccessToken#public_key}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#scope IdentityDataPlaneGenerateScopedAccessToken#scope}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#id IdentityDataPlaneGenerateScopedAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenConfig.property.timeouts"></a>

```csharp
public IdentityDataPlaneGenerateScopedAccessTokenTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts">IdentityDataPlaneGenerateScopedAccessTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#timeouts IdentityDataPlaneGenerateScopedAccessToken#timeouts}

---

### IdentityDataPlaneGenerateScopedAccessTokenTimeouts <a name="IdentityDataPlaneGenerateScopedAccessTokenTimeouts" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDataPlaneGenerateScopedAccessTokenTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#create IdentityDataPlaneGenerateScopedAccessToken#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#delete IdentityDataPlaneGenerateScopedAccessToken#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#update IdentityDataPlaneGenerateScopedAccessToken#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#create IdentityDataPlaneGenerateScopedAccessToken#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#delete IdentityDataPlaneGenerateScopedAccessToken#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_data_plane_generate_scoped_access_token#update IdentityDataPlaneGenerateScopedAccessToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference <a name="IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDataPlaneGenerateScopedAccessToken.IdentityDataPlaneGenerateScopedAccessTokenTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



