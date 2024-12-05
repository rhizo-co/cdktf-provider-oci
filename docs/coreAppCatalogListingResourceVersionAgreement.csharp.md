# `coreAppCatalogListingResourceVersionAgreement` Submodule <a name="`coreAppCatalogListingResourceVersionAgreement` Submodule" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreAppCatalogListingResourceVersionAgreement <a name="CoreAppCatalogListingResourceVersionAgreement" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement oci_core_app_catalog_listing_resource_version_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreAppCatalogListingResourceVersionAgreement(Construct Scope, string Id, CoreAppCatalogListingResourceVersionAgreementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig">CoreAppCatalogListingResourceVersionAgreementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig">CoreAppCatalogListingResourceVersionAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreAppCatalogListingResourceVersionAgreementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreAppCatalogListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreAppCatalogListingResourceVersionAgreement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreAppCatalogListingResourceVersionAgreement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreAppCatalogListingResourceVersionAgreement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreAppCatalogListingResourceVersionAgreement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreAppCatalogListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreAppCatalogListingResourceVersionAgreement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreAppCatalogListingResourceVersionAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreAppCatalogListingResourceVersionAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.eulaLink">EulaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.oracleTermsOfUseLink">OracleTermsOfUseLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference">CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeRetrieved">TimeRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingIdInput">ListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingResourceVersionInput">ListingResourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingResourceVersion">ListingResourceVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EulaLink`<sup>Required</sup> <a name="EulaLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.eulaLink"></a>

```csharp
public string EulaLink { get; }
```

- *Type:* string

---

##### `OracleTermsOfUseLink`<sup>Required</sup> <a name="OracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.oracleTermsOfUseLink"></a>

```csharp
public string OracleTermsOfUseLink { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeouts"></a>

```csharp
public CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference">CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference</a>

---

##### `TimeRetrieved`<sup>Required</sup> <a name="TimeRetrieved" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeRetrieved"></a>

```csharp
public string TimeRetrieved { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingIdInput"></a>

```csharp
public string ListingIdInput { get; }
```

- *Type:* string

---

##### `ListingResourceVersionInput`<sup>Optional</sup> <a name="ListingResourceVersionInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingResourceVersionInput"></a>

```csharp
public string ListingResourceVersionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `ListingResourceVersion`<sup>Required</sup> <a name="ListingResourceVersion" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.listingResourceVersion"></a>

```csharp
public string ListingResourceVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreAppCatalogListingResourceVersionAgreementConfig <a name="CoreAppCatalogListingResourceVersionAgreementConfig" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreAppCatalogListingResourceVersionAgreementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ListingId,
    string ListingResourceVersion,
    string Id = null,
    CoreAppCatalogListingResourceVersionAgreementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.listingId">ListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_id CoreAppCatalogListingResourceVersionAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.listingResourceVersion">ListingResourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_resource_version CoreAppCatalogListingResourceVersionAgreement#listing_resource_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#id CoreAppCatalogListingResourceVersionAgreement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.listingId"></a>

```csharp
public string ListingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_id CoreAppCatalogListingResourceVersionAgreement#listing_id}.

---

##### `ListingResourceVersion`<sup>Required</sup> <a name="ListingResourceVersion" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.listingResourceVersion"></a>

```csharp
public string ListingResourceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_resource_version CoreAppCatalogListingResourceVersionAgreement#listing_resource_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#id CoreAppCatalogListingResourceVersionAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementConfig.property.timeouts"></a>

```csharp
public CoreAppCatalogListingResourceVersionAgreementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts">CoreAppCatalogListingResourceVersionAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#timeouts CoreAppCatalogListingResourceVersionAgreement#timeouts}

---

### CoreAppCatalogListingResourceVersionAgreementTimeouts <a name="CoreAppCatalogListingResourceVersionAgreementTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreAppCatalogListingResourceVersionAgreementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#create CoreAppCatalogListingResourceVersionAgreement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#delete CoreAppCatalogListingResourceVersionAgreement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#update CoreAppCatalogListingResourceVersionAgreement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#create CoreAppCatalogListingResourceVersionAgreement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#delete CoreAppCatalogListingResourceVersionAgreement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_listing_resource_version_agreement#update CoreAppCatalogListingResourceVersionAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference <a name="CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreAppCatalogListingResourceVersionAgreement.CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



