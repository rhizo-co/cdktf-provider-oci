# `serviceCatalogPrivateApplication` Submodule <a name="`serviceCatalogPrivateApplication` Submodule" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCatalogPrivateApplication <a name="ServiceCatalogPrivateApplication" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application oci_service_catalog_private_application}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplication(Construct Scope, string Id, ServiceCatalogPrivateApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig">ServiceCatalogPrivateApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig">ServiceCatalogPrivateApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails">PutPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLogoFileBase64Encoded">ResetLogoFileBase64Encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLongDescription">ResetLongDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPackageDetails` <a name="PutPackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails"></a>

```csharp
private void PutPackageDetails(ServiceCatalogPrivateApplicationPackageDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(ServiceCatalogPrivateApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogoFileBase64Encoded` <a name="ResetLogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLogoFileBase64Encoded"></a>

```csharp
private void ResetLogoFileBase64Encoded()
```

##### `ResetLongDescription` <a name="ResetLongDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLongDescription"></a>

```csharp
private void ResetLongDescription()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceCatalogPrivateApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceCatalogPrivateApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceCatalogPrivateApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceCatalogPrivateApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceCatalogPrivateApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceCatalogPrivateApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCatalogPrivateApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logo">Logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList">ServiceCatalogPrivateApplicationLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference">ServiceCatalogPrivateApplicationPackageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference">ServiceCatalogPrivateApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64EncodedInput">LogoFileBase64EncodedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescriptionInput">LongDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetailsInput">PackageDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64Encoded">LogoFileBase64Encoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescription">LongDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescription">ShortDescription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logo"></a>

```csharp
public ServiceCatalogPrivateApplicationLogoList Logo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList">ServiceCatalogPrivateApplicationLogoList</a>

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetails"></a>

```csharp
public ServiceCatalogPrivateApplicationPackageDetailsOutputReference PackageDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference">ServiceCatalogPrivateApplicationPackageDetailsOutputReference</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeouts"></a>

```csharp
public ServiceCatalogPrivateApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference">ServiceCatalogPrivateApplicationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogoFileBase64EncodedInput`<sup>Optional</sup> <a name="LogoFileBase64EncodedInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64EncodedInput"></a>

```csharp
public string LogoFileBase64EncodedInput { get; }
```

- *Type:* string

---

##### `LongDescriptionInput`<sup>Optional</sup> <a name="LongDescriptionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescriptionInput"></a>

```csharp
public string LongDescriptionInput { get; }
```

- *Type:* string

---

##### `PackageDetailsInput`<sup>Optional</sup> <a name="PackageDetailsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetailsInput"></a>

```csharp
public ServiceCatalogPrivateApplicationPackageDetails PackageDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescriptionInput"></a>

```csharp
public string ShortDescriptionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogoFileBase64Encoded`<sup>Required</sup> <a name="LogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64Encoded"></a>

```csharp
public string LogoFileBase64Encoded { get; }
```

- *Type:* string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescription"></a>

```csharp
public string LongDescription { get; }
```

- *Type:* string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescription"></a>

```csharp
public string ShortDescription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCatalogPrivateApplicationConfig <a name="ServiceCatalogPrivateApplicationConfig" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    ServiceCatalogPrivateApplicationPackageDetails PackageDetails,
    string ShortDescription,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string LogoFileBase64Encoded = null,
    string LongDescription = null,
    ServiceCatalogPrivateApplicationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.shortDescription">ShortDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.logoFileBase64Encoded">LogoFileBase64Encoded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.longDescription">LongDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}.

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.packageDetails"></a>

```csharp
public ServiceCatalogPrivateApplicationPackageDetails PackageDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_details ServiceCatalogPrivateApplication#package_details}

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.shortDescription"></a>

```csharp
public string ShortDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogoFileBase64Encoded`<sup>Optional</sup> <a name="LogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.logoFileBase64Encoded"></a>

```csharp
public string LogoFileBase64Encoded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}.

---

##### `LongDescription`<sup>Optional</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.longDescription"></a>

```csharp
public string LongDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.timeouts"></a>

```csharp
public ServiceCatalogPrivateApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#timeouts ServiceCatalogPrivateApplication#timeouts}

---

### ServiceCatalogPrivateApplicationLogo <a name="ServiceCatalogPrivateApplicationLogo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplicationLogo {

};
```


### ServiceCatalogPrivateApplicationPackageDetails <a name="ServiceCatalogPrivateApplicationPackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplicationPackageDetails {
    string PackageType,
    string Version,
    string ZipFileBase64Encoded = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.packageType">PackageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.zipFileBase64Encoded">ZipFileBase64Encoded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}. |

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.packageType"></a>

```csharp
public string PackageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}.

---

##### `ZipFileBase64Encoded`<sup>Optional</sup> <a name="ZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.zipFileBase64Encoded"></a>

```csharp
public string ZipFileBase64Encoded { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}.

---

### ServiceCatalogPrivateApplicationTimeouts <a name="ServiceCatalogPrivateApplicationTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCatalogPrivateApplicationLogoList <a name="ServiceCatalogPrivateApplicationLogoList" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplicationLogoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get"></a>

```csharp
private ServiceCatalogPrivateApplicationLogoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServiceCatalogPrivateApplicationLogoOutputReference <a name="ServiceCatalogPrivateApplicationLogoOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplicationLogoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl">ContentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo">ServiceCatalogPrivateApplicationLogo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentUrl`<sup>Required</sup> <a name="ContentUrl" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl"></a>

```csharp
public string ContentUrl { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue"></a>

```csharp
public ServiceCatalogPrivateApplicationLogo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo">ServiceCatalogPrivateApplicationLogo</a>

---


### ServiceCatalogPrivateApplicationPackageDetailsOutputReference <a name="ServiceCatalogPrivateApplicationPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplicationPackageDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resetZipFileBase64Encoded">ResetZipFileBase64Encoded</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetZipFileBase64Encoded` <a name="ResetZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resetZipFileBase64Encoded"></a>

```csharp
private void ResetZipFileBase64Encoded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageTypeInput">PackageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64EncodedInput">ZipFileBase64EncodedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded">ZipFileBase64Encoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageTypeInput`<sup>Optional</sup> <a name="PackageTypeInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageTypeInput"></a>

```csharp
public string PackageTypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ZipFileBase64EncodedInput`<sup>Optional</sup> <a name="ZipFileBase64EncodedInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64EncodedInput"></a>

```csharp
public string ZipFileBase64EncodedInput { get; }
```

- *Type:* string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `ZipFileBase64Encoded`<sup>Required</sup> <a name="ZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```csharp
public string ZipFileBase64Encoded { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue"></a>

```csharp
public ServiceCatalogPrivateApplicationPackageDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---


### ServiceCatalogPrivateApplicationTimeoutsOutputReference <a name="ServiceCatalogPrivateApplicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceCatalogPrivateApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



