# `mysqlChannel` Submodule <a name="`mysqlChannel` Submodule" id="rhizo-co-terraform-provider-oci.mysqlChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlChannel <a name="MysqlChannel" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel oci_mysql_channel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannel(Construct Scope, string Id, MysqlChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig">MysqlChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig">MysqlChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putSource"></a>

```csharp
private void PutSource(MysqlChannelSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource">MysqlChannelSource</a>

---

##### `PutTarget` <a name="PutTarget" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putTarget"></a>

```csharp
private void PutTarget(MysqlChannelTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget">MysqlChannelTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putTimeouts"></a>

```csharp
private void PutTimeouts(MysqlChannelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts">MysqlChannelTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MysqlChannel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MysqlChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference">MysqlChannelSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference">MysqlChannelTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference">MysqlChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.sourceInput">SourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource">MysqlChannelSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.targetInput">TargetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget">MysqlChannelTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.source"></a>

```csharp
public MysqlChannelSourceOutputReference Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference">MysqlChannelSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.target"></a>

```csharp
public MysqlChannelTargetOutputReference Target { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference">MysqlChannelTargetOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.timeouts"></a>

```csharp
public MysqlChannelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference">MysqlChannelTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.sourceInput"></a>

```csharp
public MysqlChannelSource SourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource">MysqlChannelSource</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.targetInput"></a>

```csharp
public MysqlChannelTarget TargetInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget">MysqlChannelTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlChannelConfig <a name="MysqlChannelConfig" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MysqlChannelSource Source,
    MysqlChannelTarget Target,
    string CompartmentId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsEnabled = null,
    MysqlChannelTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource">MysqlChannelSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget">MysqlChannelTarget</a></code> | target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#compartment_id MysqlChannel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#defined_tags MysqlChannel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#description MysqlChannel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#display_name MysqlChannel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#freeform_tags MysqlChannel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#id MysqlChannel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#is_enabled MysqlChannel#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts">MysqlChannelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.source"></a>

```csharp
public MysqlChannelSource Source { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource">MysqlChannelSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#source MysqlChannel#source}

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.target"></a>

```csharp
public MysqlChannelTarget Target { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget">MysqlChannelTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#target MysqlChannel#target}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#compartment_id MysqlChannel#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#defined_tags MysqlChannel#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#description MysqlChannel#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#display_name MysqlChannel#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#freeform_tags MysqlChannel#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#id MysqlChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#is_enabled MysqlChannel#is_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelConfig.property.timeouts"></a>

```csharp
public MysqlChannelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts">MysqlChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#timeouts MysqlChannel#timeouts}

---

### MysqlChannelSource <a name="MysqlChannelSource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelSource {
    string Hostname,
    string Password,
    string SourceType,
    string SslMode,
    string Username,
    MysqlChannelSourceAnonymousTransactionsHandling AnonymousTransactionsHandling = null,
    double Port = null,
    MysqlChannelSourceSslCaCertificate SslCaCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#hostname MysqlChannel#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#password MysqlChannel#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#source_type MysqlChannel#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#ssl_mode MysqlChannel#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#username MysqlChannel#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.anonymousTransactionsHandling">AnonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling">MysqlChannelSourceAnonymousTransactionsHandling</a></code> | anonymous_transactions_handling block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#port MysqlChannel#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.sslCaCertificate">SslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate">MysqlChannelSourceSslCaCertificate</a></code> | ssl_ca_certificate block. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#hostname MysqlChannel#hostname}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#password MysqlChannel#password}.

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#source_type MysqlChannel#source_type}.

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#ssl_mode MysqlChannel#ssl_mode}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#username MysqlChannel#username}.

---

##### `AnonymousTransactionsHandling`<sup>Optional</sup> <a name="AnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.anonymousTransactionsHandling"></a>

```csharp
public MysqlChannelSourceAnonymousTransactionsHandling AnonymousTransactionsHandling { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling">MysqlChannelSourceAnonymousTransactionsHandling</a>

anonymous_transactions_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#anonymous_transactions_handling MysqlChannel#anonymous_transactions_handling}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#port MysqlChannel#port}.

---

##### `SslCaCertificate`<sup>Optional</sup> <a name="SslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource.property.sslCaCertificate"></a>

```csharp
public MysqlChannelSourceSslCaCertificate SslCaCertificate { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate">MysqlChannelSourceSslCaCertificate</a>

ssl_ca_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#ssl_ca_certificate MysqlChannel#ssl_ca_certificate}

---

### MysqlChannelSourceAnonymousTransactionsHandling <a name="MysqlChannelSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelSourceAnonymousTransactionsHandling {
    string Policy,
    string LastConfiguredLogFilename = null,
    string LastConfiguredLogOffset = null,
    string Uuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#policy MysqlChannel#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.property.lastConfiguredLogFilename">LastConfiguredLogFilename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#last_configured_log_filename MysqlChannel#last_configured_log_filename}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.property.lastConfiguredLogOffset">LastConfiguredLogOffset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#last_configured_log_offset MysqlChannel#last_configured_log_offset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.property.uuid">Uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#uuid MysqlChannel#uuid}. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#policy MysqlChannel#policy}.

---

##### `LastConfiguredLogFilename`<sup>Optional</sup> <a name="LastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.property.lastConfiguredLogFilename"></a>

```csharp
public string LastConfiguredLogFilename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#last_configured_log_filename MysqlChannel#last_configured_log_filename}.

---

##### `LastConfiguredLogOffset`<sup>Optional</sup> <a name="LastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.property.lastConfiguredLogOffset"></a>

```csharp
public string LastConfiguredLogOffset { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#last_configured_log_offset MysqlChannel#last_configured_log_offset}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#uuid MysqlChannel#uuid}.

---

### MysqlChannelSourceSslCaCertificate <a name="MysqlChannelSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelSourceSslCaCertificate {
    string CertificateType,
    string Contents
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate.property.certificateType">CertificateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#certificate_type MysqlChannel#certificate_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate.property.contents">Contents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#contents MysqlChannel#contents}. |

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate.property.certificateType"></a>

```csharp
public string CertificateType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#certificate_type MysqlChannel#certificate_type}.

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate.property.contents"></a>

```csharp
public string Contents { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#contents MysqlChannel#contents}.

---

### MysqlChannelTarget <a name="MysqlChannelTarget" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelTarget {
    string DbSystemId,
    string TargetType,
    string ApplierUsername = null,
    string ChannelName = null,
    double DelayInSeconds = null,
    object Filters = null,
    string TablesWithoutPrimaryKeyHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#db_system_id MysqlChannel#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#target_type MysqlChannel#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.applierUsername">ApplierUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#applier_username MysqlChannel#applier_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.channelName">ChannelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#channel_name MysqlChannel#channel_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.delayInSeconds">DelayInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#delay_in_seconds MysqlChannel#delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.filters">Filters</a></code> | <code>object</code> | filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.tablesWithoutPrimaryKeyHandling">TablesWithoutPrimaryKeyHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#tables_without_primary_key_handling MysqlChannel#tables_without_primary_key_handling}. |

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#db_system_id MysqlChannel#db_system_id}.

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#target_type MysqlChannel#target_type}.

---

##### `ApplierUsername`<sup>Optional</sup> <a name="ApplierUsername" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.applierUsername"></a>

```csharp
public string ApplierUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#applier_username MysqlChannel#applier_username}.

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#channel_name MysqlChannel#channel_name}.

---

##### `DelayInSeconds`<sup>Optional</sup> <a name="DelayInSeconds" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.delayInSeconds"></a>

```csharp
public double DelayInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#delay_in_seconds MysqlChannel#delay_in_seconds}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.filters"></a>

```csharp
public object Filters { get; set; }
```

- *Type:* object

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#filters MysqlChannel#filters}

---

##### `TablesWithoutPrimaryKeyHandling`<sup>Optional</sup> <a name="TablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget.property.tablesWithoutPrimaryKeyHandling"></a>

```csharp
public string TablesWithoutPrimaryKeyHandling { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#tables_without_primary_key_handling MysqlChannel#tables_without_primary_key_handling}.

---

### MysqlChannelTargetFilters <a name="MysqlChannelTargetFilters" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelTargetFilters {
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFilters.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#type MysqlChannel#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFilters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#value MysqlChannel#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFilters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#type MysqlChannel#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFilters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#value MysqlChannel#value}.

---

### MysqlChannelTimeouts <a name="MysqlChannelTimeouts" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#create MysqlChannel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#delete MysqlChannel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#update MysqlChannel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#create MysqlChannel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#delete MysqlChannel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_channel#update MysqlChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlChannelSourceAnonymousTransactionsHandlingOutputReference <a name="MysqlChannelSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelSourceAnonymousTransactionsHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resetLastConfiguredLogFilename">ResetLastConfiguredLogFilename</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resetLastConfiguredLogOffset">ResetLastConfiguredLogOffset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLastConfiguredLogFilename` <a name="ResetLastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resetLastConfiguredLogFilename"></a>

```csharp
private void ResetLastConfiguredLogFilename()
```

##### `ResetLastConfiguredLogOffset` <a name="ResetLastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resetLastConfiguredLogOffset"></a>

```csharp
private void ResetLastConfiguredLogOffset()
```

##### `ResetUuid` <a name="ResetUuid" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilenameInput">LastConfiguredLogFilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffsetInput">LastConfiguredLogOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">LastConfiguredLogFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">LastConfiguredLogOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling">MysqlChannelSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastConfiguredLogFilenameInput`<sup>Optional</sup> <a name="LastConfiguredLogFilenameInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilenameInput"></a>

```csharp
public string LastConfiguredLogFilenameInput { get; }
```

- *Type:* string

---

##### `LastConfiguredLogOffsetInput`<sup>Optional</sup> <a name="LastConfiguredLogOffsetInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffsetInput"></a>

```csharp
public string LastConfiguredLogOffsetInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `LastConfiguredLogFilename`<sup>Required</sup> <a name="LastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```csharp
public string LastConfiguredLogFilename { get; }
```

- *Type:* string

---

##### `LastConfiguredLogOffset`<sup>Required</sup> <a name="LastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```csharp
public string LastConfiguredLogOffset { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```csharp
public MysqlChannelSourceAnonymousTransactionsHandling InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling">MysqlChannelSourceAnonymousTransactionsHandling</a>

---


### MysqlChannelSourceOutputReference <a name="MysqlChannelSourceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.putAnonymousTransactionsHandling">PutAnonymousTransactionsHandling</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.putSslCaCertificate">PutSslCaCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resetAnonymousTransactionsHandling">ResetAnonymousTransactionsHandling</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resetSslCaCertificate">ResetSslCaCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnonymousTransactionsHandling` <a name="PutAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.putAnonymousTransactionsHandling"></a>

```csharp
private void PutAnonymousTransactionsHandling(MysqlChannelSourceAnonymousTransactionsHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.putAnonymousTransactionsHandling.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling">MysqlChannelSourceAnonymousTransactionsHandling</a>

---

##### `PutSslCaCertificate` <a name="PutSslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.putSslCaCertificate"></a>

```csharp
private void PutSslCaCertificate(MysqlChannelSourceSslCaCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.putSslCaCertificate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate">MysqlChannelSourceSslCaCertificate</a>

---

##### `ResetAnonymousTransactionsHandling` <a name="ResetAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resetAnonymousTransactionsHandling"></a>

```csharp
private void ResetAnonymousTransactionsHandling()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSslCaCertificate` <a name="ResetSslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.resetSslCaCertificate"></a>

```csharp
private void ResetSslCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.anonymousTransactionsHandling">AnonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference">MysqlChannelSourceAnonymousTransactionsHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference">MysqlChannelSourceSslCaCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.anonymousTransactionsHandlingInput">AnonymousTransactionsHandlingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling">MysqlChannelSourceAnonymousTransactionsHandling</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sslCaCertificateInput">SslCaCertificateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate">MysqlChannelSourceSslCaCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource">MysqlChannelSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnonymousTransactionsHandling`<sup>Required</sup> <a name="AnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.anonymousTransactionsHandling"></a>

```csharp
public MysqlChannelSourceAnonymousTransactionsHandlingOutputReference AnonymousTransactionsHandling { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandlingOutputReference">MysqlChannelSourceAnonymousTransactionsHandlingOutputReference</a>

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sslCaCertificate"></a>

```csharp
public MysqlChannelSourceSslCaCertificateOutputReference SslCaCertificate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference">MysqlChannelSourceSslCaCertificateOutputReference</a>

---

##### `AnonymousTransactionsHandlingInput`<sup>Optional</sup> <a name="AnonymousTransactionsHandlingInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.anonymousTransactionsHandlingInput"></a>

```csharp
public MysqlChannelSourceAnonymousTransactionsHandling AnonymousTransactionsHandlingInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceAnonymousTransactionsHandling">MysqlChannelSourceAnonymousTransactionsHandling</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `SslCaCertificateInput`<sup>Optional</sup> <a name="SslCaCertificateInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sslCaCertificateInput"></a>

```csharp
public MysqlChannelSourceSslCaCertificate SslCaCertificateInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate">MysqlChannelSourceSslCaCertificate</a>

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceOutputReference.property.internalValue"></a>

```csharp
public MysqlChannelSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSource">MysqlChannelSource</a>

---


### MysqlChannelSourceSslCaCertificateOutputReference <a name="MysqlChannelSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelSourceSslCaCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.certificateTypeInput">CertificateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.certificateType">CertificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.contents">Contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate">MysqlChannelSourceSslCaCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateTypeInput`<sup>Optional</sup> <a name="CertificateTypeInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.certificateTypeInput"></a>

```csharp
public string CertificateTypeInput { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.contentsInput"></a>

```csharp
public string ContentsInput { get; }
```

- *Type:* string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.certificateType"></a>

```csharp
public string CertificateType { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.contents"></a>

```csharp
public string Contents { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificateOutputReference.property.internalValue"></a>

```csharp
public MysqlChannelSourceSslCaCertificate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelSourceSslCaCertificate">MysqlChannelSourceSslCaCertificate</a>

---


### MysqlChannelTargetFiltersList <a name="MysqlChannelTargetFiltersList" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelTargetFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.get"></a>

```csharp
private MysqlChannelTargetFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlChannelTargetFiltersOutputReference <a name="MysqlChannelTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelTargetFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlChannelTargetOutputReference <a name="MysqlChannelTargetOutputReference" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetApplierUsername">ResetApplierUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetDelayInSeconds">ResetDelayInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetTablesWithoutPrimaryKeyHandling">ResetTablesWithoutPrimaryKeyHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.putFilters"></a>

```csharp
private void PutFilters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.putFilters.parameter.value"></a>

- *Type:* object

---

##### `ResetApplierUsername` <a name="ResetApplierUsername" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetApplierUsername"></a>

```csharp
private void ResetApplierUsername()
```

##### `ResetChannelName` <a name="ResetChannelName" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetChannelName"></a>

```csharp
private void ResetChannelName()
```

##### `ResetDelayInSeconds` <a name="ResetDelayInSeconds" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetDelayInSeconds"></a>

```csharp
private void ResetDelayInSeconds()
```

##### `ResetFilters` <a name="ResetFilters" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetTablesWithoutPrimaryKeyHandling` <a name="ResetTablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.resetTablesWithoutPrimaryKeyHandling"></a>

```csharp
private void ResetTablesWithoutPrimaryKeyHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList">MysqlChannelTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.applierUsernameInput">ApplierUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.delayInSecondsInput">DelayInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.filtersInput">FiltersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.tablesWithoutPrimaryKeyHandlingInput">TablesWithoutPrimaryKeyHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.applierUsername">ApplierUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.delayInSeconds">DelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">TablesWithoutPrimaryKeyHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget">MysqlChannelTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.filters"></a>

```csharp
public MysqlChannelTargetFiltersList Filters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetFiltersList">MysqlChannelTargetFiltersList</a>

---

##### `ApplierUsernameInput`<sup>Optional</sup> <a name="ApplierUsernameInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.applierUsernameInput"></a>

```csharp
public string ApplierUsernameInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DelayInSecondsInput`<sup>Optional</sup> <a name="DelayInSecondsInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.delayInSecondsInput"></a>

```csharp
public double DelayInSecondsInput { get; }
```

- *Type:* double

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.filtersInput"></a>

```csharp
public object FiltersInput { get; }
```

- *Type:* object

---

##### `TablesWithoutPrimaryKeyHandlingInput`<sup>Optional</sup> <a name="TablesWithoutPrimaryKeyHandlingInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.tablesWithoutPrimaryKeyHandlingInput"></a>

```csharp
public string TablesWithoutPrimaryKeyHandlingInput { get; }
```

- *Type:* string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `ApplierUsername`<sup>Required</sup> <a name="ApplierUsername" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.applierUsername"></a>

```csharp
public string ApplierUsername { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DelayInSeconds`<sup>Required</sup> <a name="DelayInSeconds" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.delayInSeconds"></a>

```csharp
public double DelayInSeconds { get; }
```

- *Type:* double

---

##### `TablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="TablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```csharp
public string TablesWithoutPrimaryKeyHandling { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTargetOutputReference.property.internalValue"></a>

```csharp
public MysqlChannelTarget InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTarget">MysqlChannelTarget</a>

---


### MysqlChannelTimeoutsOutputReference <a name="MysqlChannelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlChannelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlChannel.MysqlChannelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



