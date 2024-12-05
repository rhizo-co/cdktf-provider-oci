# `coreVnicAttachment` Submodule <a name="`coreVnicAttachment` Submodule" id="rhizo-co-terraform-provider-oci.coreVnicAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVnicAttachment <a name="CoreVnicAttachment" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment oci_core_vnic_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachment(Construct Scope, string Id, CoreVnicAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig">CoreVnicAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig">CoreVnicAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails">PutCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetNicIndex">ResetNicIndex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreateVnicDetails` <a name="PutCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails"></a>

```csharp
private void PutCreateVnicDetails(CoreVnicAttachmentCreateVnicDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreVnicAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNicIndex` <a name="ResetNicIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetNicIndex"></a>

```csharp
private void ResetNicIndex()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVnicAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVnicAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVnicAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVnicAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVnicAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreVnicAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreVnicAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreVnicAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreVnicAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetails">CreateVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference">CoreVnicAttachmentCreateVnicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference">CoreVnicAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanTag">VlanTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetailsInput">CreateVnicDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndexInput">NicIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndex">NicIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CreateVnicDetails`<sup>Required</sup> <a name="CreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetails"></a>

```csharp
public CoreVnicAttachmentCreateVnicDetailsOutputReference CreateVnicDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference">CoreVnicAttachmentCreateVnicDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeouts"></a>

```csharp
public CoreVnicAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference">CoreVnicAttachmentTimeoutsOutputReference</a>

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanTag"></a>

```csharp
public double VlanTag { get; }
```

- *Type:* double

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `CreateVnicDetailsInput`<sup>Optional</sup> <a name="CreateVnicDetailsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetailsInput"></a>

```csharp
public CoreVnicAttachmentCreateVnicDetails CreateVnicDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `NicIndexInput`<sup>Optional</sup> <a name="NicIndexInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndexInput"></a>

```csharp
public double NicIndexInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `NicIndex`<sup>Required</sup> <a name="NicIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndex"></a>

```csharp
public double NicIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVnicAttachmentConfig <a name="CoreVnicAttachmentConfig" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CoreVnicAttachmentCreateVnicDetails CreateVnicDetails,
    string InstanceId,
    string DisplayName = null,
    string Id = null,
    double NicIndex = null,
    CoreVnicAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.createVnicDetails">CreateVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.nicIndex">NicIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CreateVnicDetails`<sup>Required</sup> <a name="CreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.createVnicDetails"></a>

```csharp
public CoreVnicAttachmentCreateVnicDetails CreateVnicDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create_vnic_details CoreVnicAttachment#create_vnic_details}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NicIndex`<sup>Optional</sup> <a name="NicIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.nicIndex"></a>

```csharp
public double NicIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.timeouts"></a>

```csharp
public CoreVnicAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#timeouts CoreVnicAttachment#timeouts}

---

### CoreVnicAttachmentCreateVnicDetails <a name="CoreVnicAttachmentCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachmentCreateVnicDetails {
    object AssignIpv6Ip = null,
    object AssignPrivateDnsRecord = null,
    string AssignPublicIp = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string HostnameLabel = null,
    object Ipv6AddressIpv6SubnetCidrPairDetails = null,
    string[] NsgIds = null,
    string PrivateIp = null,
    System.Collections.Generic.IDictionary<string, string> SecurityAttributes = null,
    object SkipSourceDestCheck = null,
    string SubnetId = null,
    string VlanId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignIpv6Ip">AssignIpv6Ip</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_ipv6ip CoreVnicAttachment#assign_ipv6ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPrivateDnsRecord">AssignPrivateDnsRecord</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_private_dns_record CoreVnicAttachment#assign_private_dns_record}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPublicIp">AssignPublicIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_public_ip CoreVnicAttachment#assign_public_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#defined_tags CoreVnicAttachment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#freeform_tags CoreVnicAttachment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#hostname_label CoreVnicAttachment#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails">Ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code>object</code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nsg_ids CoreVnicAttachment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#private_ip CoreVnicAttachment#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#security_attributes CoreVnicAttachment#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#skip_source_dest_check CoreVnicAttachment#skip_source_dest_check}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#subnet_id CoreVnicAttachment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.vlanId">VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#vlan_id CoreVnicAttachment#vlan_id}. |

---

##### `AssignIpv6Ip`<sup>Optional</sup> <a name="AssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignIpv6Ip"></a>

```csharp
public object AssignIpv6Ip { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_ipv6ip CoreVnicAttachment#assign_ipv6ip}.

---

##### `AssignPrivateDnsRecord`<sup>Optional</sup> <a name="AssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPrivateDnsRecord"></a>

```csharp
public object AssignPrivateDnsRecord { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_private_dns_record CoreVnicAttachment#assign_private_dns_record}.

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPublicIp"></a>

```csharp
public string AssignPublicIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_public_ip CoreVnicAttachment#assign_public_ip}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#defined_tags CoreVnicAttachment#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#freeform_tags CoreVnicAttachment#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#hostname_label CoreVnicAttachment#hostname_label}.

---

##### `Ipv6AddressIpv6SubnetCidrPairDetails`<sup>Optional</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```csharp
public object Ipv6AddressIpv6SubnetCidrPairDetails { get; set; }
```

- *Type:* object

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6address_ipv6subnet_cidr_pair_details CoreVnicAttachment#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nsg_ids CoreVnicAttachment#nsg_ids}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#private_ip CoreVnicAttachment#private_ip}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#security_attributes CoreVnicAttachment#security_attributes}.

---

##### `SkipSourceDestCheck`<sup>Optional</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.skipSourceDestCheck"></a>

```csharp
public object SkipSourceDestCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#skip_source_dest_check CoreVnicAttachment#skip_source_dest_check}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#subnet_id CoreVnicAttachment#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.vlanId"></a>

```csharp
public string VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#vlan_id CoreVnicAttachment#vlan_id}.

---

### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
    string Ipv6Address = null,
    string Ipv6SubnetCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_address CoreVnicAttachment#ipv6_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">Ipv6SubnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_subnet_cidr CoreVnicAttachment#ipv6_subnet_cidr}. |

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_address CoreVnicAttachment#ipv6_address}.

---

##### `Ipv6SubnetCidr`<sup>Optional</sup> <a name="Ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```csharp
public string Ipv6SubnetCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_subnet_cidr CoreVnicAttachment#ipv6_subnet_cidr}.

---

### CoreVnicAttachmentTimeouts <a name="CoreVnicAttachmentTimeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create CoreVnicAttachment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#delete CoreVnicAttachment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#update CoreVnicAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create CoreVnicAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#delete CoreVnicAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#update CoreVnicAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```csharp
private CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">ResetIpv6SubnetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetIpv6SubnetCidr` <a name="ResetIpv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```csharp
private void ResetIpv6SubnetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">Ipv6SubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">Ipv6SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6SubnetCidrInput`<sup>Optional</sup> <a name="Ipv6SubnetCidrInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```csharp
public string Ipv6SubnetCidrInput { get; }
```

- *Type:* string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Ipv6SubnetCidr`<sup>Required</sup> <a name="Ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```csharp
public string Ipv6SubnetCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVnicAttachmentCreateVnicDetailsOutputReference <a name="CoreVnicAttachmentCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachmentCreateVnicDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">PutIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignIpv6Ip">ResetAssignIpv6Ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord">ResetAssignPrivateDnsRecord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">ResetIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSkipSourceDestCheck">ResetSkipSourceDestCheck</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv6AddressIpv6SubnetCidrPairDetails` <a name="PutIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```csharp
private void PutIpv6AddressIpv6SubnetCidrPairDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* object

---

##### `ResetAssignIpv6Ip` <a name="ResetAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignIpv6Ip"></a>

```csharp
private void ResetAssignIpv6Ip()
```

##### `ResetAssignPrivateDnsRecord` <a name="ResetAssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord"></a>

```csharp
private void ResetAssignPrivateDnsRecord()
```

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPublicIp"></a>

```csharp
private void ResetAssignPublicIp()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetHostnameLabel"></a>

```csharp
private void ResetHostnameLabel()
```

##### `ResetIpv6AddressIpv6SubnetCidrPairDetails` <a name="ResetIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```csharp
private void ResetIpv6AddressIpv6SubnetCidrPairDetails()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSecurityAttributes"></a>

```csharp
private void ResetSecurityAttributes()
```

##### `ResetSkipSourceDestCheck` <a name="ResetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSkipSourceDestCheck"></a>

```csharp
private void ResetSkipSourceDestCheck()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetVlanId"></a>

```csharp
private void ResetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">Ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6IpInput">AssignIpv6IpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput">AssignPrivateDnsRecordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">Ipv6AddressIpv6SubnetCidrPairDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput">SkipSourceDestCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6Ip">AssignIpv6Ip</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">AssignPrivateDnsRecord</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```csharp
public CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList Ipv6AddressIpv6SubnetCidrPairDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `AssignIpv6IpInput`<sup>Optional</sup> <a name="AssignIpv6IpInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6IpInput"></a>

```csharp
public object AssignIpv6IpInput { get; }
```

- *Type:* object

---

##### `AssignPrivateDnsRecordInput`<sup>Optional</sup> <a name="AssignPrivateDnsRecordInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput"></a>

```csharp
public object AssignPrivateDnsRecordInput { get; }
```

- *Type:* object

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIpInput"></a>

```csharp
public string AssignPublicIpInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabelInput"></a>

```csharp
public string HostnameLabelInput { get; }
```

- *Type:* string

---

##### `Ipv6AddressIpv6SubnetCidrPairDetailsInput`<sup>Optional</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetailsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```csharp
public object Ipv6AddressIpv6SubnetCidrPairDetailsInput { get; }
```

- *Type:* object

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SkipSourceDestCheckInput`<sup>Optional</sup> <a name="SkipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput"></a>

```csharp
public object SkipSourceDestCheckInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanIdInput"></a>

```csharp
public string VlanIdInput { get; }
```

- *Type:* string

---

##### `AssignIpv6Ip`<sup>Required</sup> <a name="AssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```csharp
public object AssignIpv6Ip { get; }
```

- *Type:* object

---

##### `AssignPrivateDnsRecord`<sup>Required</sup> <a name="AssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```csharp
public object AssignPrivateDnsRecord { get; }
```

- *Type:* object

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```csharp
public string AssignPublicIp { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```csharp
public object SkipSourceDestCheck { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreVnicAttachmentCreateVnicDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

---


### CoreVnicAttachmentTimeoutsOutputReference <a name="CoreVnicAttachmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVnicAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



