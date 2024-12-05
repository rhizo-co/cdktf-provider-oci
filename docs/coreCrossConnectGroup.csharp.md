# `coreCrossConnectGroup` Submodule <a name="`coreCrossConnectGroup` Submodule" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCrossConnectGroup <a name="CoreCrossConnectGroup" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group oci_core_cross_connect_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectGroup(Construct Scope, string Id, CoreCrossConnectGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig">CoreCrossConnectGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig">CoreCrossConnectGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties">PutMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetCustomerReferenceName">ResetCustomerReferenceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetMacsecProperties">ResetMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMacsecProperties` <a name="PutMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties"></a>

```csharp
private void PutMacsecProperties(CoreCrossConnectGroupMacsecProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreCrossConnectGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>

---

##### `ResetCustomerReferenceName` <a name="ResetCustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetCustomerReferenceName"></a>

```csharp
private void ResetCustomerReferenceName()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMacsecProperties` <a name="ResetMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetMacsecProperties"></a>

```csharp
private void ResetMacsecProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreCrossConnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCrossConnectGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCrossConnectGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCrossConnectGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreCrossConnectGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreCrossConnectGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreCrossConnectGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreCrossConnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreCrossConnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecProperties">MacsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference">CoreCrossConnectGroupMacsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociLogicalDeviceName">OciLogicalDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociPhysicalDeviceName">OciPhysicalDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference">CoreCrossConnectGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceNameInput">CustomerReferenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecPropertiesInput">MacsecPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceName">CustomerReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `MacsecProperties`<sup>Required</sup> <a name="MacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecProperties"></a>

```csharp
public CoreCrossConnectGroupMacsecPropertiesOutputReference MacsecProperties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference">CoreCrossConnectGroupMacsecPropertiesOutputReference</a>

---

##### `OciLogicalDeviceName`<sup>Required</sup> <a name="OciLogicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociLogicalDeviceName"></a>

```csharp
public string OciLogicalDeviceName { get; }
```

- *Type:* string

---

##### `OciPhysicalDeviceName`<sup>Required</sup> <a name="OciPhysicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociPhysicalDeviceName"></a>

```csharp
public string OciPhysicalDeviceName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeouts"></a>

```csharp
public CoreCrossConnectGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference">CoreCrossConnectGroupTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CustomerReferenceNameInput`<sup>Optional</sup> <a name="CustomerReferenceNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceNameInput"></a>

```csharp
public string CustomerReferenceNameInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MacsecPropertiesInput`<sup>Optional</sup> <a name="MacsecPropertiesInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecPropertiesInput"></a>

```csharp
public CoreCrossConnectGroupMacsecProperties MacsecPropertiesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CustomerReferenceName`<sup>Required</sup> <a name="CustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceName"></a>

```csharp
public string CustomerReferenceName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCrossConnectGroupConfig <a name="CoreCrossConnectGroupConfig" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string CustomerReferenceName = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    CoreCrossConnectGroupMacsecProperties MacsecProperties = null,
    CoreCrossConnectGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.customerReferenceName">CustomerReferenceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.macsecProperties">MacsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}.

---

##### `CustomerReferenceName`<sup>Optional</sup> <a name="CustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.customerReferenceName"></a>

```csharp
public string CustomerReferenceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MacsecProperties`<sup>Optional</sup> <a name="MacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.macsecProperties"></a>

```csharp
public CoreCrossConnectGroupMacsecProperties MacsecProperties { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#macsec_properties CoreCrossConnectGroup#macsec_properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.timeouts"></a>

```csharp
public CoreCrossConnectGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#timeouts CoreCrossConnectGroup#timeouts}

---

### CoreCrossConnectGroupMacsecProperties <a name="CoreCrossConnectGroupMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectGroupMacsecProperties {
    string State,
    string EncryptionCipher = null,
    object IsUnprotectedTrafficAllowed = null,
    CoreCrossConnectGroupMacsecPropertiesPrimaryKey PrimaryKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#state CoreCrossConnectGroup#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.encryptionCipher">EncryptionCipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#encryption_cipher CoreCrossConnectGroup#encryption_cipher}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.isUnprotectedTrafficAllowed">IsUnprotectedTrafficAllowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#is_unprotected_traffic_allowed CoreCrossConnectGroup#is_unprotected_traffic_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.primaryKey">PrimaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | primary_key block. |

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#state CoreCrossConnectGroup#state}.

---

##### `EncryptionCipher`<sup>Optional</sup> <a name="EncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.encryptionCipher"></a>

```csharp
public string EncryptionCipher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#encryption_cipher CoreCrossConnectGroup#encryption_cipher}.

---

##### `IsUnprotectedTrafficAllowed`<sup>Optional</sup> <a name="IsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.isUnprotectedTrafficAllowed"></a>

```csharp
public object IsUnprotectedTrafficAllowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#is_unprotected_traffic_allowed CoreCrossConnectGroup#is_unprotected_traffic_allowed}.

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.primaryKey"></a>

```csharp
public CoreCrossConnectGroupMacsecPropertiesPrimaryKey PrimaryKey { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#primary_key CoreCrossConnectGroup#primary_key}

---

### CoreCrossConnectGroupMacsecPropertiesPrimaryKey <a name="CoreCrossConnectGroupMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectGroupMacsecPropertiesPrimaryKey {
    string ConnectivityAssociationKeySecretId,
    string ConnectivityAssociationNameSecretId,
    string ConnectivityAssociationKeySecretVersion = null,
    string ConnectivityAssociationNameSecretVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId">ConnectivityAssociationKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_id CoreCrossConnectGroup#connectivity_association_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId">ConnectivityAssociationNameSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_id CoreCrossConnectGroup#connectivity_association_name_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretVersion">ConnectivityAssociationKeySecretVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_version CoreCrossConnectGroup#connectivity_association_key_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretVersion">ConnectivityAssociationNameSecretVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_version CoreCrossConnectGroup#connectivity_association_name_secret_version}. |

---

##### `ConnectivityAssociationKeySecretId`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId"></a>

```csharp
public string ConnectivityAssociationKeySecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_id CoreCrossConnectGroup#connectivity_association_key_secret_id}.

---

##### `ConnectivityAssociationNameSecretId`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId"></a>

```csharp
public string ConnectivityAssociationNameSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_id CoreCrossConnectGroup#connectivity_association_name_secret_id}.

---

##### `ConnectivityAssociationKeySecretVersion`<sup>Optional</sup> <a name="ConnectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretVersion"></a>

```csharp
public string ConnectivityAssociationKeySecretVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_version CoreCrossConnectGroup#connectivity_association_key_secret_version}.

---

##### `ConnectivityAssociationNameSecretVersion`<sup>Optional</sup> <a name="ConnectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretVersion"></a>

```csharp
public string ConnectivityAssociationNameSecretVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_version CoreCrossConnectGroup#connectivity_association_name_secret_version}.

---

### CoreCrossConnectGroupTimeouts <a name="CoreCrossConnectGroupTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#create CoreCrossConnectGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#delete CoreCrossConnectGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#update CoreCrossConnectGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#create CoreCrossConnectGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#delete CoreCrossConnectGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#update CoreCrossConnectGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCrossConnectGroupMacsecPropertiesOutputReference <a name="CoreCrossConnectGroupMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectGroupMacsecPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey">PutPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetEncryptionCipher">ResetEncryptionCipher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed">ResetIsUnprotectedTrafficAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryKey` <a name="PutPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey"></a>

```csharp
private void PutPrimaryKey(CoreCrossConnectGroupMacsecPropertiesPrimaryKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---

##### `ResetEncryptionCipher` <a name="ResetEncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetEncryptionCipher"></a>

```csharp
private void ResetEncryptionCipher()
```

##### `ResetIsUnprotectedTrafficAllowed` <a name="ResetIsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed"></a>

```csharp
private void ResetIsUnprotectedTrafficAllowed()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetPrimaryKey"></a>

```csharp
private void ResetPrimaryKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipherInput">EncryptionCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput">IsUnprotectedTrafficAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher">EncryptionCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">IsUnprotectedTrafficAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey"></a>

```csharp
public CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference PrimaryKey { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference</a>

---

##### `EncryptionCipherInput`<sup>Optional</sup> <a name="EncryptionCipherInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipherInput"></a>

```csharp
public string EncryptionCipherInput { get; }
```

- *Type:* string

---

##### `IsUnprotectedTrafficAllowedInput`<sup>Optional</sup> <a name="IsUnprotectedTrafficAllowedInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput"></a>

```csharp
public object IsUnprotectedTrafficAllowedInput { get; }
```

- *Type:* object

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKeyInput"></a>

```csharp
public CoreCrossConnectGroupMacsecPropertiesPrimaryKey PrimaryKeyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `EncryptionCipher`<sup>Required</sup> <a name="EncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```csharp
public string EncryptionCipher { get; }
```

- *Type:* string

---

##### `IsUnprotectedTrafficAllowed`<sup>Required</sup> <a name="IsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```csharp
public object IsUnprotectedTrafficAllowed { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue"></a>

```csharp
public CoreCrossConnectGroupMacsecProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

---


### CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference <a name="CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationKeySecretVersion">ResetConnectivityAssociationKeySecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationNameSecretVersion">ResetConnectivityAssociationNameSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivityAssociationKeySecretVersion` <a name="ResetConnectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationKeySecretVersion"></a>

```csharp
private void ResetConnectivityAssociationKeySecretVersion()
```

##### `ResetConnectivityAssociationNameSecretVersion` <a name="ResetConnectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationNameSecretVersion"></a>

```csharp
private void ResetConnectivityAssociationNameSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput">ConnectivityAssociationKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersionInput">ConnectivityAssociationKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput">ConnectivityAssociationNameSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersionInput">ConnectivityAssociationNameSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">ConnectivityAssociationKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">ConnectivityAssociationKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">ConnectivityAssociationNameSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">ConnectivityAssociationNameSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationKeySecretIdInput`<sup>Optional</sup> <a name="ConnectivityAssociationKeySecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput"></a>

```csharp
public string ConnectivityAssociationKeySecretIdInput { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationKeySecretVersionInput`<sup>Optional</sup> <a name="ConnectivityAssociationKeySecretVersionInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersionInput"></a>

```csharp
public string ConnectivityAssociationKeySecretVersionInput { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationNameSecretIdInput`<sup>Optional</sup> <a name="ConnectivityAssociationNameSecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput"></a>

```csharp
public string ConnectivityAssociationNameSecretIdInput { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationNameSecretVersionInput`<sup>Optional</sup> <a name="ConnectivityAssociationNameSecretVersionInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersionInput"></a>

```csharp
public string ConnectivityAssociationNameSecretVersionInput { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationKeySecretId`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```csharp
public string ConnectivityAssociationKeySecretId { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationKeySecretVersion`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```csharp
public string ConnectivityAssociationKeySecretVersion { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationNameSecretId`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```csharp
public string ConnectivityAssociationNameSecretId { get; }
```

- *Type:* string

---

##### `ConnectivityAssociationNameSecretVersion`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```csharp
public string ConnectivityAssociationNameSecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```csharp
public CoreCrossConnectGroupMacsecPropertiesPrimaryKey InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---


### CoreCrossConnectGroupTimeoutsOutputReference <a name="CoreCrossConnectGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreCrossConnectGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



