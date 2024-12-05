# `bdsBdsInstancePatchAction` Submodule <a name="`bdsBdsInstancePatchAction` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstancePatchAction <a name="BdsBdsInstancePatchAction" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action oci_bds_bds_instance_patch_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstancePatchAction(Construct Scope, string Id, BdsBdsInstancePatchActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig">BdsBdsInstancePatchActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig">BdsBdsInstancePatchActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig">PutPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetPatchingConfig">ResetPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPatchingConfig` <a name="PutPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig"></a>

```csharp
private void PutPatchingConfig(BdsBdsInstancePatchActionPatchingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts"></a>

```csharp
private void PutTimeouts(BdsBdsInstancePatchActionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPatchingConfig` <a name="ResetPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetPatchingConfig"></a>

```csharp
private void ResetPatchingConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstancePatchAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstancePatchAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstancePatchAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstancePatchAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstancePatchAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BdsBdsInstancePatchAction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BdsBdsInstancePatchAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BdsBdsInstancePatchAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstancePatchAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfig">PatchingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference">BdsBdsInstancePatchActionPatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference">BdsBdsInstancePatchActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPasswordInput">ClusterAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfigInput">PatchingConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PatchingConfig`<sup>Required</sup> <a name="PatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfig"></a>

```csharp
public BdsBdsInstancePatchActionPatchingConfigOutputReference PatchingConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference">BdsBdsInstancePatchActionPatchingConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeouts"></a>

```csharp
public BdsBdsInstancePatchActionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference">BdsBdsInstancePatchActionTimeoutsOutputReference</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceIdInput"></a>

```csharp
public string BdsInstanceIdInput { get; }
```

- *Type:* string

---

##### `ClusterAdminPasswordInput`<sup>Optional</sup> <a name="ClusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPasswordInput"></a>

```csharp
public string ClusterAdminPasswordInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PatchingConfigInput`<sup>Optional</sup> <a name="PatchingConfigInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfigInput"></a>

```csharp
public BdsBdsInstancePatchActionPatchingConfig PatchingConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPassword"></a>

```csharp
public string ClusterAdminPassword { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstancePatchActionConfig <a name="BdsBdsInstancePatchActionConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstancePatchActionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BdsInstanceId,
    string ClusterAdminPassword,
    string Version,
    string Id = null,
    BdsBdsInstancePatchActionPatchingConfig PatchingConfig = null,
    BdsBdsInstancePatchActionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.patchingConfig">PatchingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | patching_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}.

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.clusterAdminPassword"></a>

```csharp
public string ClusterAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PatchingConfig`<sup>Optional</sup> <a name="PatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.patchingConfig"></a>

```csharp
public BdsBdsInstancePatchActionPatchingConfig PatchingConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

patching_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config BdsBdsInstancePatchAction#patching_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.timeouts"></a>

```csharp
public BdsBdsInstancePatchActionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#timeouts BdsBdsInstancePatchAction#timeouts}

---

### BdsBdsInstancePatchActionPatchingConfig <a name="BdsBdsInstancePatchActionPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstancePatchActionPatchingConfig {
    string PatchingConfigStrategy,
    double BatchSize = null,
    double WaitTimeBetweenBatchInSeconds = null,
    double WaitTimeBetweenDomainInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.patchingConfigStrategy">PatchingConfigStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.batchSize">BatchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenBatchInSeconds">WaitTimeBetweenBatchInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenDomainInSeconds">WaitTimeBetweenDomainInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}. |

---

##### `PatchingConfigStrategy`<sup>Required</sup> <a name="PatchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.patchingConfigStrategy"></a>

```csharp
public string PatchingConfigStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}.

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}.

---

##### `WaitTimeBetweenBatchInSeconds`<sup>Optional</sup> <a name="WaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenBatchInSeconds"></a>

```csharp
public double WaitTimeBetweenBatchInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}.

---

##### `WaitTimeBetweenDomainInSeconds`<sup>Optional</sup> <a name="WaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenDomainInSeconds"></a>

```csharp
public double WaitTimeBetweenDomainInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}.

---

### BdsBdsInstancePatchActionTimeouts <a name="BdsBdsInstancePatchActionTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstancePatchActionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstancePatchActionPatchingConfigOutputReference <a name="BdsBdsInstancePatchActionPatchingConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstancePatchActionPatchingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenBatchInSeconds">ResetWaitTimeBetweenBatchInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenDomainInSeconds">ResetWaitTimeBetweenDomainInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchSize` <a name="ResetBatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetBatchSize"></a>

```csharp
private void ResetBatchSize()
```

##### `ResetWaitTimeBetweenBatchInSeconds` <a name="ResetWaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenBatchInSeconds"></a>

```csharp
private void ResetWaitTimeBetweenBatchInSeconds()
```

##### `ResetWaitTimeBetweenDomainInSeconds` <a name="ResetWaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenDomainInSeconds"></a>

```csharp
private void ResetWaitTimeBetweenDomainInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategyInput">PatchingConfigStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSecondsInput">WaitTimeBetweenBatchInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSecondsInput">WaitTimeBetweenDomainInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategy">PatchingConfigStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSeconds">WaitTimeBetweenBatchInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSeconds">WaitTimeBetweenDomainInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `PatchingConfigStrategyInput`<sup>Optional</sup> <a name="PatchingConfigStrategyInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategyInput"></a>

```csharp
public string PatchingConfigStrategyInput { get; }
```

- *Type:* string

---

##### `WaitTimeBetweenBatchInSecondsInput`<sup>Optional</sup> <a name="WaitTimeBetweenBatchInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSecondsInput"></a>

```csharp
public double WaitTimeBetweenBatchInSecondsInput { get; }
```

- *Type:* double

---

##### `WaitTimeBetweenDomainInSecondsInput`<sup>Optional</sup> <a name="WaitTimeBetweenDomainInSecondsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSecondsInput"></a>

```csharp
public double WaitTimeBetweenDomainInSecondsInput { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `PatchingConfigStrategy`<sup>Required</sup> <a name="PatchingConfigStrategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategy"></a>

```csharp
public string PatchingConfigStrategy { get; }
```

- *Type:* string

---

##### `WaitTimeBetweenBatchInSeconds`<sup>Required</sup> <a name="WaitTimeBetweenBatchInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSeconds"></a>

```csharp
public double WaitTimeBetweenBatchInSeconds { get; }
```

- *Type:* double

---

##### `WaitTimeBetweenDomainInSeconds`<sup>Required</sup> <a name="WaitTimeBetweenDomainInSeconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSeconds"></a>

```csharp
public double WaitTimeBetweenDomainInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.internalValue"></a>

```csharp
public BdsBdsInstancePatchActionPatchingConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---


### BdsBdsInstancePatchActionTimeoutsOutputReference <a name="BdsBdsInstancePatchActionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstancePatchActionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



