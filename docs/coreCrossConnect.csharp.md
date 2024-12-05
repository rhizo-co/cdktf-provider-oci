# `coreCrossConnect` Submodule <a name="`coreCrossConnect` Submodule" id="rhizo-co-terraform-provider-oci.coreCrossConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCrossConnect <a name="CoreCrossConnect" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect oci_core_cross_connect}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnect(Construct Scope, string Id, CoreCrossConnectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig">CoreCrossConnectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig">CoreCrossConnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties">PutMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCrossConnectGroupId">ResetCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCustomerReferenceName">ResetCustomerReferenceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFarCrossConnectOrCrossConnectGroupId">ResetFarCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetMacsecProperties">ResetMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetNearCrossConnectOrCrossConnectGroupId">ResetNearCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMacsecProperties` <a name="PutMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties"></a>

```csharp
private void PutMacsecProperties(CoreCrossConnectMacsecProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreCrossConnectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

---

##### `ResetCrossConnectGroupId` <a name="ResetCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCrossConnectGroupId"></a>

```csharp
private void ResetCrossConnectGroupId()
```

##### `ResetCustomerReferenceName` <a name="ResetCustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCustomerReferenceName"></a>

```csharp
private void ResetCustomerReferenceName()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFarCrossConnectOrCrossConnectGroupId` <a name="ResetFarCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFarCrossConnectOrCrossConnectGroupId"></a>

```csharp
private void ResetFarCrossConnectOrCrossConnectGroupId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsActive` <a name="ResetIsActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetIsActive"></a>

```csharp
private void ResetIsActive()
```

##### `ResetMacsecProperties` <a name="ResetMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetMacsecProperties"></a>

```csharp
private void ResetMacsecProperties()
```

##### `ResetNearCrossConnectOrCrossConnectGroupId` <a name="ResetNearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetNearCrossConnectOrCrossConnectGroupId"></a>

```csharp
private void ResetNearCrossConnectOrCrossConnectGroupId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreCrossConnect resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCrossConnect.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCrossConnect.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCrossConnect.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCrossConnect.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreCrossConnect resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreCrossConnect to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreCrossConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreCrossConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecProperties">MacsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference">CoreCrossConnectMacsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociLogicalDeviceName">OciLogicalDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociPhysicalDeviceName">OciPhysicalDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference">CoreCrossConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupIdInput">CrossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceNameInput">CustomerReferenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupIdInput">FarCrossConnectOrCrossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActiveInput">IsActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationNameInput">LocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecPropertiesInput">MacsecPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupIdInput">NearCrossConnectOrCrossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeNameInput">PortSpeedShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupId">CrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceName">CustomerReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupId">FarCrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActive">IsActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationName">LocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupId">NearCrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeName">PortSpeedShapeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `MacsecProperties`<sup>Required</sup> <a name="MacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecProperties"></a>

```csharp
public CoreCrossConnectMacsecPropertiesOutputReference MacsecProperties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference">CoreCrossConnectMacsecPropertiesOutputReference</a>

---

##### `OciLogicalDeviceName`<sup>Required</sup> <a name="OciLogicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociLogicalDeviceName"></a>

```csharp
public string OciLogicalDeviceName { get; }
```

- *Type:* string

---

##### `OciPhysicalDeviceName`<sup>Required</sup> <a name="OciPhysicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociPhysicalDeviceName"></a>

```csharp
public string OciPhysicalDeviceName { get; }
```

- *Type:* string

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeouts"></a>

```csharp
public CoreCrossConnectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference">CoreCrossConnectTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CrossConnectGroupIdInput`<sup>Optional</sup> <a name="CrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupIdInput"></a>

```csharp
public string CrossConnectGroupIdInput { get; }
```

- *Type:* string

---

##### `CustomerReferenceNameInput`<sup>Optional</sup> <a name="CustomerReferenceNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceNameInput"></a>

```csharp
public string CustomerReferenceNameInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FarCrossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="FarCrossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupIdInput"></a>

```csharp
public string FarCrossConnectOrCrossConnectGroupIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActiveInput"></a>

```csharp
public object IsActiveInput { get; }
```

- *Type:* object

---

##### `LocationNameInput`<sup>Optional</sup> <a name="LocationNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationNameInput"></a>

```csharp
public string LocationNameInput { get; }
```

- *Type:* string

---

##### `MacsecPropertiesInput`<sup>Optional</sup> <a name="MacsecPropertiesInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecPropertiesInput"></a>

```csharp
public CoreCrossConnectMacsecProperties MacsecPropertiesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---

##### `NearCrossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="NearCrossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupIdInput"></a>

```csharp
public string NearCrossConnectOrCrossConnectGroupIdInput { get; }
```

- *Type:* string

---

##### `PortSpeedShapeNameInput`<sup>Optional</sup> <a name="PortSpeedShapeNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeNameInput"></a>

```csharp
public string PortSpeedShapeNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CrossConnectGroupId`<sup>Required</sup> <a name="CrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupId"></a>

```csharp
public string CrossConnectGroupId { get; }
```

- *Type:* string

---

##### `CustomerReferenceName`<sup>Required</sup> <a name="CustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceName"></a>

```csharp
public string CustomerReferenceName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FarCrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="FarCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupId"></a>

```csharp
public string FarCrossConnectOrCrossConnectGroupId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActive"></a>

```csharp
public object IsActive { get; }
```

- *Type:* object

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationName"></a>

```csharp
public string LocationName { get; }
```

- *Type:* string

---

##### `NearCrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="NearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupId"></a>

```csharp
public string NearCrossConnectOrCrossConnectGroupId { get; }
```

- *Type:* string

---

##### `PortSpeedShapeName`<sup>Required</sup> <a name="PortSpeedShapeName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeName"></a>

```csharp
public string PortSpeedShapeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCrossConnectConfig <a name="CoreCrossConnectConfig" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string LocationName,
    string PortSpeedShapeName,
    string CrossConnectGroupId = null,
    string CustomerReferenceName = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    string FarCrossConnectOrCrossConnectGroupId = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsActive = null,
    CoreCrossConnectMacsecProperties MacsecProperties = null,
    string NearCrossConnectOrCrossConnectGroupId = null,
    CoreCrossConnectTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.locationName">LocationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.portSpeedShapeName">PortSpeedShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.crossConnectGroupId">CrossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.customerReferenceName">CustomerReferenceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.farCrossConnectOrCrossConnectGroupId">FarCrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.isActive">IsActive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.macsecProperties">MacsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.nearCrossConnectOrCrossConnectGroupId">NearCrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}.

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.locationName"></a>

```csharp
public string LocationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}.

---

##### `PortSpeedShapeName`<sup>Required</sup> <a name="PortSpeedShapeName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.portSpeedShapeName"></a>

```csharp
public string PortSpeedShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}.

---

##### `CrossConnectGroupId`<sup>Optional</sup> <a name="CrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.crossConnectGroupId"></a>

```csharp
public string CrossConnectGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}.

---

##### `CustomerReferenceName`<sup>Optional</sup> <a name="CustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.customerReferenceName"></a>

```csharp
public string CustomerReferenceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}.

---

##### `FarCrossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="FarCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.farCrossConnectOrCrossConnectGroupId"></a>

```csharp
public string FarCrossConnectOrCrossConnectGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.isActive"></a>

```csharp
public object IsActive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}.

---

##### `MacsecProperties`<sup>Optional</sup> <a name="MacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.macsecProperties"></a>

```csharp
public CoreCrossConnectMacsecProperties MacsecProperties { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#macsec_properties CoreCrossConnect#macsec_properties}

---

##### `NearCrossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="NearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.nearCrossConnectOrCrossConnectGroupId"></a>

```csharp
public string NearCrossConnectOrCrossConnectGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.timeouts"></a>

```csharp
public CoreCrossConnectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#timeouts CoreCrossConnect#timeouts}

---

### CoreCrossConnectMacsecProperties <a name="CoreCrossConnectMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectMacsecProperties {
    string State,
    string EncryptionCipher = null,
    object IsUnprotectedTrafficAllowed = null,
    CoreCrossConnectMacsecPropertiesPrimaryKey PrimaryKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.encryptionCipher">EncryptionCipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.isUnprotectedTrafficAllowed">IsUnprotectedTrafficAllowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.primaryKey">PrimaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | primary_key block. |

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}.

---

##### `EncryptionCipher`<sup>Optional</sup> <a name="EncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.encryptionCipher"></a>

```csharp
public string EncryptionCipher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}.

---

##### `IsUnprotectedTrafficAllowed`<sup>Optional</sup> <a name="IsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.isUnprotectedTrafficAllowed"></a>

```csharp
public object IsUnprotectedTrafficAllowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}.

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.primaryKey"></a>

```csharp
public CoreCrossConnectMacsecPropertiesPrimaryKey PrimaryKey { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#primary_key CoreCrossConnect#primary_key}

---

### CoreCrossConnectMacsecPropertiesPrimaryKey <a name="CoreCrossConnectMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectMacsecPropertiesPrimaryKey {
    string ConnectivityAssociationKeySecretId,
    string ConnectivityAssociationNameSecretId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId">ConnectivityAssociationKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId">ConnectivityAssociationNameSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}. |

---

##### `ConnectivityAssociationKeySecretId`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId"></a>

```csharp
public string ConnectivityAssociationKeySecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}.

---

##### `ConnectivityAssociationNameSecretId`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId"></a>

```csharp
public string ConnectivityAssociationNameSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}.

---

### CoreCrossConnectTimeouts <a name="CoreCrossConnectTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCrossConnectMacsecPropertiesOutputReference <a name="CoreCrossConnectMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectMacsecPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey">PutPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetEncryptionCipher">ResetEncryptionCipher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed">ResetIsUnprotectedTrafficAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryKey` <a name="PutPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey"></a>

```csharp
private void PutPrimaryKey(CoreCrossConnectMacsecPropertiesPrimaryKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---

##### `ResetEncryptionCipher` <a name="ResetEncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetEncryptionCipher"></a>

```csharp
private void ResetEncryptionCipher()
```

##### `ResetIsUnprotectedTrafficAllowed` <a name="ResetIsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed"></a>

```csharp
private void ResetIsUnprotectedTrafficAllowed()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetPrimaryKey"></a>

```csharp
private void ResetPrimaryKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipherInput">EncryptionCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput">IsUnprotectedTrafficAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipher">EncryptionCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">IsUnprotectedTrafficAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKey"></a>

```csharp
public CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference PrimaryKey { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference</a>

---

##### `EncryptionCipherInput`<sup>Optional</sup> <a name="EncryptionCipherInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipherInput"></a>

```csharp
public string EncryptionCipherInput { get; }
```

- *Type:* string

---

##### `IsUnprotectedTrafficAllowedInput`<sup>Optional</sup> <a name="IsUnprotectedTrafficAllowedInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput"></a>

```csharp
public object IsUnprotectedTrafficAllowedInput { get; }
```

- *Type:* object

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKeyInput"></a>

```csharp
public CoreCrossConnectMacsecPropertiesPrimaryKey PrimaryKeyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `EncryptionCipher`<sup>Required</sup> <a name="EncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```csharp
public string EncryptionCipher { get; }
```

- *Type:* string

---

##### `IsUnprotectedTrafficAllowed`<sup>Required</sup> <a name="IsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```csharp
public object IsUnprotectedTrafficAllowed { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.internalValue"></a>

```csharp
public CoreCrossConnectMacsecProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---


### CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference <a name="CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">ConnectivityAssociationKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">ConnectivityAssociationNameSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput">ConnectivityAssociationKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput">ConnectivityAssociationNameSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">ConnectivityAssociationKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">ConnectivityAssociationNameSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationKeySecretVersion`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```csharp
public string ConnectivityAssociationKeySecretVersion { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationNameSecretVersion`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```csharp
public string ConnectivityAssociationNameSecretVersion { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationKeySecretIdInput`<sup>Optional</sup> <a name="ConnectivityAssociationKeySecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput"></a>

```csharp
public string ConnectivityAssociationKeySecretIdInput { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationNameSecretIdInput`<sup>Optional</sup> <a name="ConnectivityAssociationNameSecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput"></a>

```csharp
public string ConnectivityAssociationNameSecretIdInput { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationKeySecretId`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```csharp
public string ConnectivityAssociationKeySecretId { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationNameSecretId`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```csharp
public string ConnectivityAssociationNameSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```csharp
public CoreCrossConnectMacsecPropertiesPrimaryKey InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---


### CoreCrossConnectTimeoutsOutputReference <a name="CoreCrossConnectTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



