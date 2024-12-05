# `fusionAppsFusionEnvironmentAdminUser` Submodule <a name="`fusionAppsFusionEnvironmentAdminUser` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentAdminUser <a name="FusionAppsFusionEnvironmentAdminUser" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user oci_fusion_apps_fusion_environment_admin_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentAdminUser(Construct Scope, string Id, FusionAppsFusionEnvironmentAdminUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig">FusionAppsFusionEnvironmentAdminUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig">FusionAppsFusionEnvironmentAdminUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts"></a>

```csharp
private void PutTimeouts(FusionAppsFusionEnvironmentAdminUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentAdminUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FusionAppsFusionEnvironmentAdminUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FusionAppsFusionEnvironmentAdminUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FusionAppsFusionEnvironmentAdminUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FusionAppsFusionEnvironmentAdminUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentAdminUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FusionAppsFusionEnvironmentAdminUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FusionAppsFusionEnvironmentAdminUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentAdminUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList">FusionAppsFusionEnvironmentAdminUserItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference">FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.items"></a>

```csharp
public FusionAppsFusionEnvironmentAdminUserItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList">FusionAppsFusionEnvironmentAdminUserItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeouts"></a>

```csharp
public FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference">FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference</a>

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentIdInput"></a>

```csharp
public string FusionEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.fusionEnvironmentId"></a>

```csharp
public string FusionEnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentAdminUserConfig <a name="FusionAppsFusionEnvironmentAdminUserConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentAdminUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EmailAddress,
    string FirstName,
    string FusionEnvironmentId,
    string LastName,
    string Username,
    string Id = null,
    string Password = null,
    FusionAppsFusionEnvironmentAdminUserTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#email_address FusionAppsFusionEnvironmentAdminUser#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#first_name FusionAppsFusionEnvironmentAdminUser#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#fusion_environment_id FusionAppsFusionEnvironmentAdminUser#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#last_name FusionAppsFusionEnvironmentAdminUser#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#username FusionAppsFusionEnvironmentAdminUser#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#id FusionAppsFusionEnvironmentAdminUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#password FusionAppsFusionEnvironmentAdminUser#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#email_address FusionAppsFusionEnvironmentAdminUser#email_address}.

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#first_name FusionAppsFusionEnvironmentAdminUser#first_name}.

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.fusionEnvironmentId"></a>

```csharp
public string FusionEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#fusion_environment_id FusionAppsFusionEnvironmentAdminUser#fusion_environment_id}.

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#last_name FusionAppsFusionEnvironmentAdminUser#last_name}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#username FusionAppsFusionEnvironmentAdminUser#username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#id FusionAppsFusionEnvironmentAdminUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#password FusionAppsFusionEnvironmentAdminUser#password}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserConfig.property.timeouts"></a>

```csharp
public FusionAppsFusionEnvironmentAdminUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts">FusionAppsFusionEnvironmentAdminUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#timeouts FusionAppsFusionEnvironmentAdminUser#timeouts}

---

### FusionAppsFusionEnvironmentAdminUserItems <a name="FusionAppsFusionEnvironmentAdminUserItems" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentAdminUserItems {

};
```


### FusionAppsFusionEnvironmentAdminUserTimeouts <a name="FusionAppsFusionEnvironmentAdminUserTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentAdminUserTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#create FusionAppsFusionEnvironmentAdminUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#delete FusionAppsFusionEnvironmentAdminUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#update FusionAppsFusionEnvironmentAdminUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#create FusionAppsFusionEnvironmentAdminUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#delete FusionAppsFusionEnvironmentAdminUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_admin_user#update FusionAppsFusionEnvironmentAdminUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentAdminUserItemsList <a name="FusionAppsFusionEnvironmentAdminUserItemsList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentAdminUserItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get"></a>

```csharp
private FusionAppsFusionEnvironmentAdminUserItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FusionAppsFusionEnvironmentAdminUserItemsOutputReference <a name="FusionAppsFusionEnvironmentAdminUserItemsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentAdminUserItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems">FusionAppsFusionEnvironmentAdminUserItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItemsOutputReference.property.internalValue"></a>

```csharp
public FusionAppsFusionEnvironmentAdminUserItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserItems">FusionAppsFusionEnvironmentAdminUserItems</a>

---


### FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentAdminUser.FusionAppsFusionEnvironmentAdminUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



