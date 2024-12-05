# `licenseManagerProductLicense` Submodule <a name="`licenseManagerProductLicense` Submodule" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicenseManagerProductLicense <a name="LicenseManagerProductLicense" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license oci_license_manager_product_license}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerProductLicense(Construct Scope, string Id, LicenseManagerProductLicenseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig">LicenseManagerProductLicenseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig">LicenseManagerProductLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putImages">PutImages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetVendorName">ResetVendorName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImages` <a name="PutImages" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putImages"></a>

```csharp
private void PutImages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putImages.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putTimeouts"></a>

```csharp
private void PutTimeouts(LicenseManagerProductLicenseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts">LicenseManagerProductLicenseTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImages` <a name="ResetImages" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetImages"></a>

```csharp
private void ResetImages()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVendorName` <a name="ResetVendorName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetVendorName"></a>

```csharp
private void ResetVendorName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LicenseManagerProductLicense resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LicenseManagerProductLicense.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LicenseManagerProductLicense.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LicenseManagerProductLicense.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LicenseManagerProductLicense.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LicenseManagerProductLicense resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicenseManagerProductLicense to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicenseManagerProductLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LicenseManagerProductLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.activeLicenseRecordCount">ActiveLicenseRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.images">Images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList">LicenseManagerProductLicenseImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isOverSubscribed">IsOverSubscribed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isUnlimited">IsUnlimited</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.statusDescription">StatusDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference">LicenseManagerProductLicenseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalActiveLicenseUnitCount">TotalActiveLicenseUnitCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalLicenseRecordCount">TotalLicenseRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalLicenseUnitsConsumed">TotalLicenseUnitsConsumed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.imagesInput">ImagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isVendorOracleInput">IsVendorOracleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.licenseUnitInput">LicenseUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.vendorNameInput">VendorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isVendorOracle">IsVendorOracle</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.licenseUnit">LicenseUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActiveLicenseRecordCount`<sup>Required</sup> <a name="ActiveLicenseRecordCount" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.activeLicenseRecordCount"></a>

```csharp
public double ActiveLicenseRecordCount { get; }
```

- *Type:* double

---

##### `Images`<sup>Required</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.images"></a>

```csharp
public LicenseManagerProductLicenseImagesList Images { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList">LicenseManagerProductLicenseImagesList</a>

---

##### `IsOverSubscribed`<sup>Required</sup> <a name="IsOverSubscribed" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isOverSubscribed"></a>

```csharp
public IResolvable IsOverSubscribed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isUnlimited"></a>

```csharp
public IResolvable IsUnlimited { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDescription`<sup>Required</sup> <a name="StatusDescription" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.statusDescription"></a>

```csharp
public string StatusDescription { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeouts"></a>

```csharp
public LicenseManagerProductLicenseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference">LicenseManagerProductLicenseTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalActiveLicenseUnitCount`<sup>Required</sup> <a name="TotalActiveLicenseUnitCount" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalActiveLicenseUnitCount"></a>

```csharp
public double TotalActiveLicenseUnitCount { get; }
```

- *Type:* double

---

##### `TotalLicenseRecordCount`<sup>Required</sup> <a name="TotalLicenseRecordCount" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalLicenseRecordCount"></a>

```csharp
public double TotalLicenseRecordCount { get; }
```

- *Type:* double

---

##### `TotalLicenseUnitsConsumed`<sup>Required</sup> <a name="TotalLicenseUnitsConsumed" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalLicenseUnitsConsumed"></a>

```csharp
public double TotalLicenseUnitsConsumed { get; }
```

- *Type:* double

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.imagesInput"></a>

```csharp
public object ImagesInput { get; }
```

- *Type:* object

---

##### `IsVendorOracleInput`<sup>Optional</sup> <a name="IsVendorOracleInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isVendorOracleInput"></a>

```csharp
public object IsVendorOracleInput { get; }
```

- *Type:* object

---

##### `LicenseUnitInput`<sup>Optional</sup> <a name="LicenseUnitInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.licenseUnitInput"></a>

```csharp
public string LicenseUnitInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VendorNameInput`<sup>Optional</sup> <a name="VendorNameInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.vendorNameInput"></a>

```csharp
public string VendorNameInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsVendorOracle`<sup>Required</sup> <a name="IsVendorOracle" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isVendorOracle"></a>

```csharp
public object IsVendorOracle { get; }
```

- *Type:* object

---

##### `LicenseUnit`<sup>Required</sup> <a name="LicenseUnit" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.licenseUnit"></a>

```csharp
public string LicenseUnit { get; }
```

- *Type:* string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerProductLicenseConfig <a name="LicenseManagerProductLicenseConfig" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerProductLicenseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    object IsVendorOracle,
    string LicenseUnit,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object Images = null,
    LicenseManagerProductLicenseTimeouts Timeouts = null,
    string VendorName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#compartment_id LicenseManagerProductLicense#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#display_name LicenseManagerProductLicense#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.isVendorOracle">IsVendorOracle</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#is_vendor_oracle LicenseManagerProductLicense#is_vendor_oracle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.licenseUnit">LicenseUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#license_unit LicenseManagerProductLicense#license_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#defined_tags LicenseManagerProductLicense#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#freeform_tags LicenseManagerProductLicense#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#id LicenseManagerProductLicense#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.images">Images</a></code> | <code>object</code> | images block. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts">LicenseManagerProductLicenseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.vendorName">VendorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#vendor_name LicenseManagerProductLicense#vendor_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#compartment_id LicenseManagerProductLicense#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#display_name LicenseManagerProductLicense#display_name}.

---

##### `IsVendorOracle`<sup>Required</sup> <a name="IsVendorOracle" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.isVendorOracle"></a>

```csharp
public object IsVendorOracle { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#is_vendor_oracle LicenseManagerProductLicense#is_vendor_oracle}.

---

##### `LicenseUnit`<sup>Required</sup> <a name="LicenseUnit" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.licenseUnit"></a>

```csharp
public string LicenseUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#license_unit LicenseManagerProductLicense#license_unit}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#defined_tags LicenseManagerProductLicense#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#freeform_tags LicenseManagerProductLicense#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#id LicenseManagerProductLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Images`<sup>Optional</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.images"></a>

```csharp
public object Images { get; set; }
```

- *Type:* object

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#images LicenseManagerProductLicense#images}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.timeouts"></a>

```csharp
public LicenseManagerProductLicenseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts">LicenseManagerProductLicenseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#timeouts LicenseManagerProductLicense#timeouts}

---

##### `VendorName`<sup>Optional</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.vendorName"></a>

```csharp
public string VendorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#vendor_name LicenseManagerProductLicense#vendor_name}.

---

### LicenseManagerProductLicenseImages <a name="LicenseManagerProductLicenseImages" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerProductLicenseImages {
    string ListingId,
    string PackageVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.property.listingId">ListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#listing_id LicenseManagerProductLicense#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.property.packageVersion">PackageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#package_version LicenseManagerProductLicense#package_version}. |

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.property.listingId"></a>

```csharp
public string ListingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#listing_id LicenseManagerProductLicense#listing_id}.

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.property.packageVersion"></a>

```csharp
public string PackageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#package_version LicenseManagerProductLicense#package_version}.

---

### LicenseManagerProductLicenseTimeouts <a name="LicenseManagerProductLicenseTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerProductLicenseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#create LicenseManagerProductLicense#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#delete LicenseManagerProductLicense#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#update LicenseManagerProductLicense#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#create LicenseManagerProductLicense#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#delete LicenseManagerProductLicense#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#update LicenseManagerProductLicense#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerProductLicenseImagesList <a name="LicenseManagerProductLicenseImagesList" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerProductLicenseImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.get"></a>

```csharp
private LicenseManagerProductLicenseImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LicenseManagerProductLicenseImagesOutputReference <a name="LicenseManagerProductLicenseImagesOutputReference" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerProductLicenseImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingName">ListingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingIdInput">ListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.packageVersionInput">PackageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingName`<sup>Required</sup> <a name="ListingName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingName"></a>

```csharp
public string ListingName { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingIdInput"></a>

```csharp
public string ListingIdInput { get; }
```

- *Type:* string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.packageVersionInput"></a>

```csharp
public string PackageVersionInput { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LicenseManagerProductLicenseTimeoutsOutputReference <a name="LicenseManagerProductLicenseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerProductLicenseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



