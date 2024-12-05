# `securityAttributeSecurityAttributeNamespace` Submodule <a name="`securityAttributeSecurityAttributeNamespace` Submodule" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityAttributeSecurityAttributeNamespace <a name="SecurityAttributeSecurityAttributeNamespace" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace oci_security_attribute_security_attribute_namespace}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeNamespace(Construct Scope, string Id, SecurityAttributeSecurityAttributeNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig">SecurityAttributeSecurityAttributeNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig">SecurityAttributeSecurityAttributeNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetIsRetired">ResetIsRetired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityAttributeSecurityAttributeNamespaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsRetired` <a name="ResetIsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetIsRetired"></a>

```csharp
private void ResetIsRetired()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityAttributeSecurityAttributeNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SecurityAttributeSecurityAttributeNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SecurityAttributeSecurityAttributeNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SecurityAttributeSecurityAttributeNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SecurityAttributeSecurityAttributeNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityAttributeSecurityAttributeNamespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityAttributeSecurityAttributeNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityAttributeSecurityAttributeNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityAttributeSecurityAttributeNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.mode">Mode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference">SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.isRetiredInput">IsRetiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.isRetired">IsRetired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.mode"></a>

```csharp
public string[] Mode { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeouts"></a>

```csharp
public SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference">SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsRetiredInput`<sup>Optional</sup> <a name="IsRetiredInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.isRetiredInput"></a>

```csharp
public object IsRetiredInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRetired`<sup>Required</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.isRetired"></a>

```csharp
public object IsRetired { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityAttributeSecurityAttributeNamespaceConfig <a name="SecurityAttributeSecurityAttributeNamespaceConfig" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeNamespaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Description,
    string Name,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsRetired = null,
    SecurityAttributeSecurityAttributeNamespaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#compartment_id SecurityAttributeSecurityAttributeNamespace#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#description SecurityAttributeSecurityAttributeNamespace#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#name SecurityAttributeSecurityAttributeNamespace#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#defined_tags SecurityAttributeSecurityAttributeNamespace#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#freeform_tags SecurityAttributeSecurityAttributeNamespace#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#id SecurityAttributeSecurityAttributeNamespace#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.isRetired">IsRetired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#is_retired SecurityAttributeSecurityAttributeNamespace#is_retired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#compartment_id SecurityAttributeSecurityAttributeNamespace#compartment_id}.

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#description SecurityAttributeSecurityAttributeNamespace#description}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#name SecurityAttributeSecurityAttributeNamespace#name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#defined_tags SecurityAttributeSecurityAttributeNamespace#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#freeform_tags SecurityAttributeSecurityAttributeNamespace#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#id SecurityAttributeSecurityAttributeNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRetired`<sup>Optional</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.isRetired"></a>

```csharp
public object IsRetired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#is_retired SecurityAttributeSecurityAttributeNamespace#is_retired}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceConfig.property.timeouts"></a>

```csharp
public SecurityAttributeSecurityAttributeNamespaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts">SecurityAttributeSecurityAttributeNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#timeouts SecurityAttributeSecurityAttributeNamespace#timeouts}

---

### SecurityAttributeSecurityAttributeNamespaceTimeouts <a name="SecurityAttributeSecurityAttributeNamespaceTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeNamespaceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#create SecurityAttributeSecurityAttributeNamespace#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#delete SecurityAttributeSecurityAttributeNamespace#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#update SecurityAttributeSecurityAttributeNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#create SecurityAttributeSecurityAttributeNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#delete SecurityAttributeSecurityAttributeNamespace#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute_namespace#update SecurityAttributeSecurityAttributeNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference <a name="SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttributeNamespace.SecurityAttributeSecurityAttributeNamespaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



