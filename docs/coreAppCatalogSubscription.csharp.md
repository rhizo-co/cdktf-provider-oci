# `coreAppCatalogSubscription` Submodule <a name="`coreAppCatalogSubscription` Submodule" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreAppCatalogSubscription <a name="CoreAppCatalogSubscription" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription oci_core_app_catalog_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreAppCatalogSubscription(Construct Scope, string Id, CoreAppCatalogSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig">CoreAppCatalogSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig">CoreAppCatalogSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetEulaLink">ResetEulaLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreAppCatalogSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a>

---

##### `ResetEulaLink` <a name="ResetEulaLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetEulaLink"></a>

```csharp
private void ResetEulaLink()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreAppCatalogSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreAppCatalogSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreAppCatalogSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreAppCatalogSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreAppCatalogSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreAppCatalogSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreAppCatalogSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreAppCatalogSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreAppCatalogSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceId">ListingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.publisherName">PublisherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference">CoreAppCatalogSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.eulaLinkInput">EulaLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingIdInput">ListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceVersionInput">ListingResourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.oracleTermsOfUseLinkInput">OracleTermsOfUseLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeRetrievedInput">TimeRetrievedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.eulaLink">EulaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceVersion">ListingResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.oracleTermsOfUseLink">OracleTermsOfUseLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeRetrieved">TimeRetrieved</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ListingResourceId`<sup>Required</sup> <a name="ListingResourceId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceId"></a>

```csharp
public string ListingResourceId { get; }
```

- *Type:* string

---

##### `PublisherName`<sup>Required</sup> <a name="PublisherName" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.publisherName"></a>

```csharp
public string PublisherName { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeouts"></a>

```csharp
public CoreAppCatalogSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference">CoreAppCatalogSubscriptionTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `EulaLinkInput`<sup>Optional</sup> <a name="EulaLinkInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.eulaLinkInput"></a>

```csharp
public string EulaLinkInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingIdInput"></a>

```csharp
public string ListingIdInput { get; }
```

- *Type:* string

---

##### `ListingResourceVersionInput`<sup>Optional</sup> <a name="ListingResourceVersionInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceVersionInput"></a>

```csharp
public string ListingResourceVersionInput { get; }
```

- *Type:* string

---

##### `OracleTermsOfUseLinkInput`<sup>Optional</sup> <a name="OracleTermsOfUseLinkInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.oracleTermsOfUseLinkInput"></a>

```csharp
public string OracleTermsOfUseLinkInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeRetrievedInput`<sup>Optional</sup> <a name="TimeRetrievedInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeRetrievedInput"></a>

```csharp
public string TimeRetrievedInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `EulaLink`<sup>Required</sup> <a name="EulaLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.eulaLink"></a>

```csharp
public string EulaLink { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `ListingResourceVersion`<sup>Required</sup> <a name="ListingResourceVersion" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.listingResourceVersion"></a>

```csharp
public string ListingResourceVersion { get; }
```

- *Type:* string

---

##### `OracleTermsOfUseLink`<sup>Required</sup> <a name="OracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.oracleTermsOfUseLink"></a>

```csharp
public string OracleTermsOfUseLink { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `TimeRetrieved`<sup>Required</sup> <a name="TimeRetrieved" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.timeRetrieved"></a>

```csharp
public string TimeRetrieved { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreAppCatalogSubscriptionConfig <a name="CoreAppCatalogSubscriptionConfig" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreAppCatalogSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ListingId,
    string ListingResourceVersion,
    string OracleTermsOfUseLink,
    string Signature,
    string TimeRetrieved,
    string EulaLink = null,
    string Id = null,
    CoreAppCatalogSubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#compartment_id CoreAppCatalogSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.listingId">ListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#listing_id CoreAppCatalogSubscription#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.listingResourceVersion">ListingResourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#listing_resource_version CoreAppCatalogSubscription#listing_resource_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.oracleTermsOfUseLink">OracleTermsOfUseLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#oracle_terms_of_use_link CoreAppCatalogSubscription#oracle_terms_of_use_link}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.signature">Signature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#signature CoreAppCatalogSubscription#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.timeRetrieved">TimeRetrieved</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#time_retrieved CoreAppCatalogSubscription#time_retrieved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.eulaLink">EulaLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#eula_link CoreAppCatalogSubscription#eula_link}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#id CoreAppCatalogSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#compartment_id CoreAppCatalogSubscription#compartment_id}.

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.listingId"></a>

```csharp
public string ListingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#listing_id CoreAppCatalogSubscription#listing_id}.

---

##### `ListingResourceVersion`<sup>Required</sup> <a name="ListingResourceVersion" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.listingResourceVersion"></a>

```csharp
public string ListingResourceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#listing_resource_version CoreAppCatalogSubscription#listing_resource_version}.

---

##### `OracleTermsOfUseLink`<sup>Required</sup> <a name="OracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.oracleTermsOfUseLink"></a>

```csharp
public string OracleTermsOfUseLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#oracle_terms_of_use_link CoreAppCatalogSubscription#oracle_terms_of_use_link}.

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#signature CoreAppCatalogSubscription#signature}.

---

##### `TimeRetrieved`<sup>Required</sup> <a name="TimeRetrieved" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.timeRetrieved"></a>

```csharp
public string TimeRetrieved { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#time_retrieved CoreAppCatalogSubscription#time_retrieved}.

---

##### `EulaLink`<sup>Optional</sup> <a name="EulaLink" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.eulaLink"></a>

```csharp
public string EulaLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#eula_link CoreAppCatalogSubscription#eula_link}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#id CoreAppCatalogSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionConfig.property.timeouts"></a>

```csharp
public CoreAppCatalogSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts">CoreAppCatalogSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#timeouts CoreAppCatalogSubscription#timeouts}

---

### CoreAppCatalogSubscriptionTimeouts <a name="CoreAppCatalogSubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreAppCatalogSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#create CoreAppCatalogSubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#delete CoreAppCatalogSubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#update CoreAppCatalogSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#create CoreAppCatalogSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#delete CoreAppCatalogSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_app_catalog_subscription#update CoreAppCatalogSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreAppCatalogSubscriptionTimeoutsOutputReference <a name="CoreAppCatalogSubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreAppCatalogSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreAppCatalogSubscription.CoreAppCatalogSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



