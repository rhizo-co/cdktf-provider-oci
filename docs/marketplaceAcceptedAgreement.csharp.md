# `marketplaceAcceptedAgreement` Submodule <a name="`marketplaceAcceptedAgreement` Submodule" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceAcceptedAgreement <a name="MarketplaceAcceptedAgreement" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement oci_marketplace_accepted_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MarketplaceAcceptedAgreement(Construct Scope, string Id, MarketplaceAcceptedAgreementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig">MarketplaceAcceptedAgreementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig">MarketplaceAcceptedAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts"></a>

```csharp
private void PutTimeouts(MarketplaceAcceptedAgreementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MarketplaceAcceptedAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MarketplaceAcceptedAgreement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MarketplaceAcceptedAgreement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MarketplaceAcceptedAgreement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MarketplaceAcceptedAgreement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MarketplaceAcceptedAgreement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MarketplaceAcceptedAgreement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MarketplaceAcceptedAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceAcceptedAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeAccepted">TimeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference">MarketplaceAcceptedAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementIdInput">AgreementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingIdInput">ListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersionInput">PackageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementId">AgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signature">Signature</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeAccepted"></a>

```csharp
public string TimeAccepted { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeouts"></a>

```csharp
public MarketplaceAcceptedAgreementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference">MarketplaceAcceptedAgreementTimeoutsOutputReference</a>

---

##### `AgreementIdInput`<sup>Optional</sup> <a name="AgreementIdInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementIdInput"></a>

```csharp
public string AgreementIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingIdInput"></a>

```csharp
public string ListingIdInput { get; }
```

- *Type:* string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersionInput"></a>

```csharp
public string PackageVersionInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.agreementId"></a>

```csharp
public string AgreementId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceAcceptedAgreementConfig <a name="MarketplaceAcceptedAgreementConfig" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MarketplaceAcceptedAgreementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AgreementId,
    string CompartmentId,
    string ListingId,
    string PackageVersion,
    string Signature,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    MarketplaceAcceptedAgreementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.agreementId">AgreementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#agreement_id MarketplaceAcceptedAgreement#agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#compartment_id MarketplaceAcceptedAgreement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.listingId">ListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#listing_id MarketplaceAcceptedAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.packageVersion">PackageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#package_version MarketplaceAcceptedAgreement#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.signature">Signature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#signature MarketplaceAcceptedAgreement#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#defined_tags MarketplaceAcceptedAgreement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#display_name MarketplaceAcceptedAgreement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#freeform_tags MarketplaceAcceptedAgreement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#id MarketplaceAcceptedAgreement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.agreementId"></a>

```csharp
public string AgreementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#agreement_id MarketplaceAcceptedAgreement#agreement_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#compartment_id MarketplaceAcceptedAgreement#compartment_id}.

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.listingId"></a>

```csharp
public string ListingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#listing_id MarketplaceAcceptedAgreement#listing_id}.

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.packageVersion"></a>

```csharp
public string PackageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#package_version MarketplaceAcceptedAgreement#package_version}.

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#signature MarketplaceAcceptedAgreement#signature}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#defined_tags MarketplaceAcceptedAgreement#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#display_name MarketplaceAcceptedAgreement#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#freeform_tags MarketplaceAcceptedAgreement#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#id MarketplaceAcceptedAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementConfig.property.timeouts"></a>

```csharp
public MarketplaceAcceptedAgreementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts">MarketplaceAcceptedAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#timeouts MarketplaceAcceptedAgreement#timeouts}

---

### MarketplaceAcceptedAgreementTimeouts <a name="MarketplaceAcceptedAgreementTimeouts" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MarketplaceAcceptedAgreementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#create MarketplaceAcceptedAgreement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#delete MarketplaceAcceptedAgreement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#update MarketplaceAcceptedAgreement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#create MarketplaceAcceptedAgreement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#delete MarketplaceAcceptedAgreement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_accepted_agreement#update MarketplaceAcceptedAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MarketplaceAcceptedAgreementTimeoutsOutputReference <a name="MarketplaceAcceptedAgreementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MarketplaceAcceptedAgreementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplaceAcceptedAgreement.MarketplaceAcceptedAgreementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



