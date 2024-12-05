# `bdsBdsInstanceMetastoreConfig` Submodule <a name="`bdsBdsInstanceMetastoreConfig` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceMetastoreConfig <a name="BdsBdsInstanceMetastoreConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config oci_bds_bds_instance_metastore_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceMetastoreConfig(Construct Scope, string Id, BdsBdsInstanceMetastoreConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig">BdsBdsInstanceMetastoreConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig">BdsBdsInstanceMetastoreConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetActivateTrigger">ResetActivateTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(BdsBdsInstanceMetastoreConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

---

##### `ResetActivateTrigger` <a name="ResetActivateTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetActivateTrigger"></a>

```csharp
private void ResetActivateTrigger()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstanceMetastoreConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstanceMetastoreConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstanceMetastoreConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BdsBdsInstanceMetastoreConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BdsBdsInstanceMetastoreConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BdsBdsInstanceMetastoreConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceMetastoreConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreType">MetastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference">BdsBdsInstanceMetastoreConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTriggerInput">ActivateTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyIdInput">BdsApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphraseInput">BdsApiKeyPassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPasswordInput">ClusterAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTrigger">ActivateTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyId">BdsApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase">BdsApiKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `MetastoreType`<sup>Required</sup> <a name="MetastoreType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreType"></a>

```csharp
public string MetastoreType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeouts"></a>

```csharp
public BdsBdsInstanceMetastoreConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference">BdsBdsInstanceMetastoreConfigTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ActivateTriggerInput`<sup>Optional</sup> <a name="ActivateTriggerInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTriggerInput"></a>

```csharp
public double ActivateTriggerInput { get; }
```

- *Type:* double

---

##### `BdsApiKeyIdInput`<sup>Optional</sup> <a name="BdsApiKeyIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyIdInput"></a>

```csharp
public string BdsApiKeyIdInput { get; }
```

- *Type:* string

---

##### `BdsApiKeyPassphraseInput`<sup>Optional</sup> <a name="BdsApiKeyPassphraseInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphraseInput"></a>

```csharp
public string BdsApiKeyPassphraseInput { get; }
```

- *Type:* string

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput"></a>

```csharp
public string BdsInstanceIdInput { get; }
```

- *Type:* string

---

##### `ClusterAdminPasswordInput`<sup>Optional</sup> <a name="ClusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPasswordInput"></a>

```csharp
public string ClusterAdminPasswordInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ActivateTrigger`<sup>Required</sup> <a name="ActivateTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTrigger"></a>

```csharp
public double ActivateTrigger { get; }
```

- *Type:* double

---

##### `BdsApiKeyId`<sup>Required</sup> <a name="BdsApiKeyId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyId"></a>

```csharp
public string BdsApiKeyId { get; }
```

- *Type:* string

---

##### `BdsApiKeyPassphrase`<sup>Required</sup> <a name="BdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase"></a>

```csharp
public string BdsApiKeyPassphrase { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPassword"></a>

```csharp
public string ClusterAdminPassword { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceMetastoreConfigConfig <a name="BdsBdsInstanceMetastoreConfigConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceMetastoreConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BdsApiKeyId,
    string BdsApiKeyPassphrase,
    string BdsInstanceId,
    string ClusterAdminPassword,
    string MetastoreId,
    double ActivateTrigger = null,
    string DisplayName = null,
    string Id = null,
    BdsBdsInstanceMetastoreConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyId">BdsApiKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyPassphrase">BdsApiKeyPassphrase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.activateTrigger">ActivateTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BdsApiKeyId`<sup>Required</sup> <a name="BdsApiKeyId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyId"></a>

```csharp
public string BdsApiKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}.

---

##### `BdsApiKeyPassphrase`<sup>Required</sup> <a name="BdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyPassphrase"></a>

```csharp
public string BdsApiKeyPassphrase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}.

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}.

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.clusterAdminPassword"></a>

```csharp
public string ClusterAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}.

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}.

---

##### `ActivateTrigger`<sup>Optional</sup> <a name="ActivateTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.activateTrigger"></a>

```csharp
public double ActivateTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.timeouts"></a>

```csharp
public BdsBdsInstanceMetastoreConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#timeouts BdsBdsInstanceMetastoreConfig#timeouts}

---

### BdsBdsInstanceMetastoreConfigTimeouts <a name="BdsBdsInstanceMetastoreConfigTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceMetastoreConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#create BdsBdsInstanceMetastoreConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#delete BdsBdsInstanceMetastoreConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#update BdsBdsInstanceMetastoreConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#create BdsBdsInstanceMetastoreConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#delete BdsBdsInstanceMetastoreConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#update BdsBdsInstanceMetastoreConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceMetastoreConfigTimeoutsOutputReference <a name="BdsBdsInstanceMetastoreConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BdsBdsInstanceMetastoreConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



