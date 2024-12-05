# `bdsBdsInstanceApiKey` Submodule <a name="`bdsBdsInstanceApiKey` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceApiKey <a name="BdsBdsInstanceApiKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key oci_bds_bds_instance_api_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceApiKey(Construct Scope, string Id, BdsBdsInstanceApiKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig">BdsBdsInstanceApiKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig">BdsBdsInstanceApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.resetDefaultRegion">ResetDefaultRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.putTimeouts"></a>

```csharp
private void PutTimeouts(BdsBdsInstanceApiKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts">BdsBdsInstanceApiKeyTimeouts</a>

---

##### `ResetDefaultRegion` <a name="ResetDefaultRegion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.resetDefaultRegion"></a>

```csharp
private void ResetDefaultRegion()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstanceApiKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstanceApiKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstanceApiKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstanceApiKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BdsBdsInstanceApiKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BdsBdsInstanceApiKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BdsBdsInstanceApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.pemfilepath">Pemfilepath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference">BdsBdsInstanceApiKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.defaultRegionInput">DefaultRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.keyAliasInput">KeyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.passphraseInput">PassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.defaultRegion">DefaultRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.keyAlias">KeyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Pemfilepath`<sup>Required</sup> <a name="Pemfilepath" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.pemfilepath"></a>

```csharp
public string Pemfilepath { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.timeouts"></a>

```csharp
public BdsBdsInstanceApiKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference">BdsBdsInstanceApiKeyTimeoutsOutputReference</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.bdsInstanceIdInput"></a>

```csharp
public string BdsInstanceIdInput { get; }
```

- *Type:* string

---

##### `DefaultRegionInput`<sup>Optional</sup> <a name="DefaultRegionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.defaultRegionInput"></a>

```csharp
public string DefaultRegionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyAliasInput`<sup>Optional</sup> <a name="KeyAliasInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.keyAliasInput"></a>

```csharp
public string KeyAliasInput { get; }
```

- *Type:* string

---

##### `PassphraseInput`<sup>Optional</sup> <a name="PassphraseInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.passphraseInput"></a>

```csharp
public string PassphraseInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `DefaultRegion`<sup>Required</sup> <a name="DefaultRegion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.defaultRegion"></a>

```csharp
public string DefaultRegion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.keyAlias"></a>

```csharp
public string KeyAlias { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceApiKeyConfig <a name="BdsBdsInstanceApiKeyConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceApiKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BdsInstanceId,
    string KeyAlias,
    string Passphrase,
    string UserId,
    string DefaultRegion = null,
    string Id = null,
    BdsBdsInstanceApiKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#bds_instance_id BdsBdsInstanceApiKey#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.keyAlias">KeyAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#key_alias BdsBdsInstanceApiKey#key_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.passphrase">Passphrase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#passphrase BdsBdsInstanceApiKey#passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#user_id BdsBdsInstanceApiKey#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.defaultRegion">DefaultRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#default_region BdsBdsInstanceApiKey#default_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#id BdsBdsInstanceApiKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts">BdsBdsInstanceApiKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#bds_instance_id BdsBdsInstanceApiKey#bds_instance_id}.

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.keyAlias"></a>

```csharp
public string KeyAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#key_alias BdsBdsInstanceApiKey#key_alias}.

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.passphrase"></a>

```csharp
public string Passphrase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#passphrase BdsBdsInstanceApiKey#passphrase}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#user_id BdsBdsInstanceApiKey#user_id}.

---

##### `DefaultRegion`<sup>Optional</sup> <a name="DefaultRegion" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.defaultRegion"></a>

```csharp
public string DefaultRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#default_region BdsBdsInstanceApiKey#default_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#id BdsBdsInstanceApiKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyConfig.property.timeouts"></a>

```csharp
public BdsBdsInstanceApiKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts">BdsBdsInstanceApiKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#timeouts BdsBdsInstanceApiKey#timeouts}

---

### BdsBdsInstanceApiKeyTimeouts <a name="BdsBdsInstanceApiKeyTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceApiKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#create BdsBdsInstanceApiKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#delete BdsBdsInstanceApiKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#update BdsBdsInstanceApiKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#create BdsBdsInstanceApiKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#delete BdsBdsInstanceApiKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_api_key#update BdsBdsInstanceApiKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceApiKeyTimeoutsOutputReference <a name="BdsBdsInstanceApiKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceApiKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceApiKey.BdsBdsInstanceApiKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



