# `securityAttributeSecurityAttribute` Submodule <a name="`securityAttributeSecurityAttribute` Submodule" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityAttributeSecurityAttribute <a name="SecurityAttributeSecurityAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute oci_security_attribute_security_attribute}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttribute(Construct Scope, string Id, SecurityAttributeSecurityAttributeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig">SecurityAttributeSecurityAttributeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig">SecurityAttributeSecurityAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator">PutValidator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetIsRetired">ResetIsRetired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetValidator">ResetValidator</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityAttributeSecurityAttributeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a>

---

##### `PutValidator` <a name="PutValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator"></a>

```csharp
private void PutValidator(SecurityAttributeSecurityAttributeValidator Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsRetired` <a name="ResetIsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetIsRetired"></a>

```csharp
private void ResetIsRetired()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidator` <a name="ResetValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetValidator"></a>

```csharp
private void ResetValidator()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SecurityAttributeSecurityAttribute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SecurityAttributeSecurityAttribute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SecurityAttributeSecurityAttribute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

SecurityAttributeSecurityAttribute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityAttributeSecurityAttribute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityAttributeSecurityAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityAttributeSecurityAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName">SecurityAttributeNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference">SecurityAttributeSecurityAttributeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validator">Validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference">SecurityAttributeSecurityAttributeValidatorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetiredInput">IsRetiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput">SecurityAttributeNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validatorInput">ValidatorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetired">IsRetired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `SecurityAttributeNamespaceName`<sup>Required</sup> <a name="SecurityAttributeNamespaceName" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName"></a>

```csharp
public string SecurityAttributeNamespaceName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeouts"></a>

```csharp
public SecurityAttributeSecurityAttributeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference">SecurityAttributeSecurityAttributeTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Validator`<sup>Required</sup> <a name="Validator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validator"></a>

```csharp
public SecurityAttributeSecurityAttributeValidatorOutputReference Validator { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference">SecurityAttributeSecurityAttributeValidatorOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsRetiredInput`<sup>Optional</sup> <a name="IsRetiredInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetiredInput"></a>

```csharp
public object IsRetiredInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecurityAttributeNamespaceIdInput`<sup>Optional</sup> <a name="SecurityAttributeNamespaceIdInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput"></a>

```csharp
public string SecurityAttributeNamespaceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidatorInput`<sup>Optional</sup> <a name="ValidatorInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validatorInput"></a>

```csharp
public SecurityAttributeSecurityAttributeValidator ValidatorInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRetired`<sup>Required</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetired"></a>

```csharp
public object IsRetired { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId"></a>

```csharp
public string SecurityAttributeNamespaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityAttributeSecurityAttributeConfig <a name="SecurityAttributeSecurityAttributeConfig" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string Name,
    string SecurityAttributeNamespaceId,
    string Id = null,
    object IsRetired = null,
    SecurityAttributeSecurityAttributeTimeouts Timeouts = null,
    SecurityAttributeSecurityAttributeValidator Validator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#description SecurityAttributeSecurityAttribute#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#name SecurityAttributeSecurityAttribute#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#security_attribute_namespace_id SecurityAttributeSecurityAttribute#security_attribute_namespace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#id SecurityAttributeSecurityAttribute#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.isRetired">IsRetired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#is_retired SecurityAttributeSecurityAttribute#is_retired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.validator">Validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | validator block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#description SecurityAttributeSecurityAttribute#description}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#name SecurityAttributeSecurityAttribute#name}.

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId"></a>

```csharp
public string SecurityAttributeNamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#security_attribute_namespace_id SecurityAttributeSecurityAttribute#security_attribute_namespace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#id SecurityAttributeSecurityAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRetired`<sup>Optional</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.isRetired"></a>

```csharp
public object IsRetired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#is_retired SecurityAttributeSecurityAttribute#is_retired}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.timeouts"></a>

```csharp
public SecurityAttributeSecurityAttributeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#timeouts SecurityAttributeSecurityAttribute#timeouts}

---

##### `Validator`<sup>Optional</sup> <a name="Validator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.validator"></a>

```csharp
public SecurityAttributeSecurityAttributeValidator Validator { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

validator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator SecurityAttributeSecurityAttribute#validator}

---

### SecurityAttributeSecurityAttributeTimeouts <a name="SecurityAttributeSecurityAttributeTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#create SecurityAttributeSecurityAttribute#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#delete SecurityAttributeSecurityAttribute#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#update SecurityAttributeSecurityAttribute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#create SecurityAttributeSecurityAttribute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#delete SecurityAttributeSecurityAttribute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#update SecurityAttributeSecurityAttribute#update}.

---

### SecurityAttributeSecurityAttributeValidator <a name="SecurityAttributeSecurityAttributeValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeValidator {
    string ValidatorType,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.validatorType">ValidatorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator_type SecurityAttributeSecurityAttribute#validator_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#values SecurityAttributeSecurityAttribute#values}. |

---

##### `ValidatorType`<sup>Required</sup> <a name="ValidatorType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.validatorType"></a>

```csharp
public string ValidatorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator_type SecurityAttributeSecurityAttribute#validator_type}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#values SecurityAttributeSecurityAttribute#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityAttributeSecurityAttributeTimeoutsOutputReference <a name="SecurityAttributeSecurityAttributeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityAttributeSecurityAttributeValidatorOutputReference <a name="SecurityAttributeSecurityAttributeValidatorOutputReference" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new SecurityAttributeSecurityAttributeValidatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorTypeInput">ValidatorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType">ValidatorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValidatorTypeInput`<sup>Optional</sup> <a name="ValidatorTypeInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorTypeInput"></a>

```csharp
public string ValidatorTypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `ValidatorType`<sup>Required</sup> <a name="ValidatorType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType"></a>

```csharp
public string ValidatorType { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue"></a>

```csharp
public SecurityAttributeSecurityAttributeValidator InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---



