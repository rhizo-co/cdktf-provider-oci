# `coreDrgAttachment` Submodule <a name="`coreDrgAttachment` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgAttachment <a name="CoreDrgAttachment" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment oci_core_drg_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgAttachment(Construct Scope, string Id, CoreDrgAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig">CoreDrgAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig">CoreDrgAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putNetworkDetails">PutNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDrgRouteTableId">ResetDrgRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetExportDrgRouteDistributionId">ResetExportDrgRouteDistributionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetNetworkDetails">ResetNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetRemoveExportDrgRouteDistributionTrigger">ResetRemoveExportDrgRouteDistributionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetRouteTableId">ResetRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetVcnId">ResetVcnId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkDetails` <a name="PutNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putNetworkDetails"></a>

```csharp
private void PutNetworkDetails(CoreDrgAttachmentNetworkDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putNetworkDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreDrgAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts">CoreDrgAttachmentTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDrgRouteTableId` <a name="ResetDrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDrgRouteTableId"></a>

```csharp
private void ResetDrgRouteTableId()
```

##### `ResetExportDrgRouteDistributionId` <a name="ResetExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetExportDrgRouteDistributionId"></a>

```csharp
private void ResetExportDrgRouteDistributionId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkDetails` <a name="ResetNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetNetworkDetails"></a>

```csharp
private void ResetNetworkDetails()
```

##### `ResetRemoveExportDrgRouteDistributionTrigger` <a name="ResetRemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetRemoveExportDrgRouteDistributionTrigger"></a>

```csharp
private void ResetRemoveExportDrgRouteDistributionTrigger()
```

##### `ResetRouteTableId` <a name="ResetRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetRouteTableId"></a>

```csharp
private void ResetRouteTableId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVcnId` <a name="ResetVcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetVcnId"></a>

```csharp
private void ResetVcnId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDrgAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreDrgAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreDrgAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreDrgAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreDrgAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreDrgAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreDrgAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreDrgAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.isCrossTenancy">IsCrossTenancy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference">CoreDrgAttachmentNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference">CoreDrgAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgIdInput">DrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgRouteTableIdInput">DrgRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.exportDrgRouteDistributionIdInput">ExportDrgRouteDistributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.networkDetailsInput">NetworkDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.removeExportDrgRouteDistributionTriggerInput">RemoveExportDrgRouteDistributionTriggerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.vcnIdInput">VcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgId">DrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgRouteTableId">DrgRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.exportDrgRouteDistributionId">ExportDrgRouteDistributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.removeExportDrgRouteDistributionTrigger">RemoveExportDrgRouteDistributionTrigger</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.routeTableId">RouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `IsCrossTenancy`<sup>Required</sup> <a name="IsCrossTenancy" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.isCrossTenancy"></a>

```csharp
public IResolvable IsCrossTenancy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetworkDetails`<sup>Required</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.networkDetails"></a>

```csharp
public CoreDrgAttachmentNetworkDetailsOutputReference NetworkDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference">CoreDrgAttachmentNetworkDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeouts"></a>

```csharp
public CoreDrgAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference">CoreDrgAttachmentTimeoutsOutputReference</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DrgIdInput`<sup>Optional</sup> <a name="DrgIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgIdInput"></a>

```csharp
public string DrgIdInput { get; }
```

- *Type:* string

---

##### `DrgRouteTableIdInput`<sup>Optional</sup> <a name="DrgRouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgRouteTableIdInput"></a>

```csharp
public string DrgRouteTableIdInput { get; }
```

- *Type:* string

---

##### `ExportDrgRouteDistributionIdInput`<sup>Optional</sup> <a name="ExportDrgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.exportDrgRouteDistributionIdInput"></a>

```csharp
public string ExportDrgRouteDistributionIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkDetailsInput`<sup>Optional</sup> <a name="NetworkDetailsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.networkDetailsInput"></a>

```csharp
public CoreDrgAttachmentNetworkDetails NetworkDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a>

---

##### `RemoveExportDrgRouteDistributionTriggerInput`<sup>Optional</sup> <a name="RemoveExportDrgRouteDistributionTriggerInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.removeExportDrgRouteDistributionTriggerInput"></a>

```csharp
public object RemoveExportDrgRouteDistributionTriggerInput { get; }
```

- *Type:* object

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.routeTableIdInput"></a>

```csharp
public string RouteTableIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.vcnIdInput"></a>

```csharp
public string VcnIdInput { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DrgId`<sup>Required</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgId"></a>

```csharp
public string DrgId { get; }
```

- *Type:* string

---

##### `DrgRouteTableId`<sup>Required</sup> <a name="DrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgRouteTableId"></a>

```csharp
public string DrgRouteTableId { get; }
```

- *Type:* string

---

##### `ExportDrgRouteDistributionId`<sup>Required</sup> <a name="ExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.exportDrgRouteDistributionId"></a>

```csharp
public string ExportDrgRouteDistributionId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RemoveExportDrgRouteDistributionTrigger`<sup>Required</sup> <a name="RemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.removeExportDrgRouteDistributionTrigger"></a>

```csharp
public object RemoveExportDrgRouteDistributionTrigger { get; }
```

- *Type:* object

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.routeTableId"></a>

```csharp
public string RouteTableId { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgAttachmentConfig <a name="CoreDrgAttachmentConfig" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DrgId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    string DrgRouteTableId = null,
    string ExportDrgRouteDistributionId = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    CoreDrgAttachmentNetworkDetails NetworkDetails = null,
    object RemoveExportDrgRouteDistributionTrigger = null,
    string RouteTableId = null,
    CoreDrgAttachmentTimeouts Timeouts = null,
    string VcnId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.drgId">DrgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#drg_id CoreDrgAttachment#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#defined_tags CoreDrgAttachment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#display_name CoreDrgAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.drgRouteTableId">DrgRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#drg_route_table_id CoreDrgAttachment#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.exportDrgRouteDistributionId">ExportDrgRouteDistributionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#export_drg_route_distribution_id CoreDrgAttachment#export_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#freeform_tags CoreDrgAttachment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.removeExportDrgRouteDistributionTrigger">RemoveExportDrgRouteDistributionTrigger</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#remove_export_drg_route_distribution_trigger CoreDrgAttachment#remove_export_drg_route_distribution_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.routeTableId">RouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts">CoreDrgAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.vcnId">VcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#vcn_id CoreDrgAttachment#vcn_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DrgId`<sup>Required</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.drgId"></a>

```csharp
public string DrgId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#drg_id CoreDrgAttachment#drg_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#defined_tags CoreDrgAttachment#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#display_name CoreDrgAttachment#display_name}.

---

##### `DrgRouteTableId`<sup>Optional</sup> <a name="DrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.drgRouteTableId"></a>

```csharp
public string DrgRouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#drg_route_table_id CoreDrgAttachment#drg_route_table_id}.

---

##### `ExportDrgRouteDistributionId`<sup>Optional</sup> <a name="ExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.exportDrgRouteDistributionId"></a>

```csharp
public string ExportDrgRouteDistributionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#export_drg_route_distribution_id CoreDrgAttachment#export_drg_route_distribution_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#freeform_tags CoreDrgAttachment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkDetails`<sup>Optional</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.networkDetails"></a>

```csharp
public CoreDrgAttachmentNetworkDetails NetworkDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#network_details CoreDrgAttachment#network_details}

---

##### `RemoveExportDrgRouteDistributionTrigger`<sup>Optional</sup> <a name="RemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.removeExportDrgRouteDistributionTrigger"></a>

```csharp
public object RemoveExportDrgRouteDistributionTrigger { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#remove_export_drg_route_distribution_trigger CoreDrgAttachment#remove_export_drg_route_distribution_trigger}.

---

##### `RouteTableId`<sup>Optional</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.routeTableId"></a>

```csharp
public string RouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.timeouts"></a>

```csharp
public CoreDrgAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts">CoreDrgAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#timeouts CoreDrgAttachment#timeouts}

---

##### `VcnId`<sup>Optional</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.vcnId"></a>

```csharp
public string VcnId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#vcn_id CoreDrgAttachment#vcn_id}.

---

### CoreDrgAttachmentNetworkDetails <a name="CoreDrgAttachmentNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgAttachmentNetworkDetails {
    string Type,
    string Id = null,
    string RouteTableId = null,
    string VcnRouteType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#type CoreDrgAttachment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.routeTableId">RouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.vcnRouteType">VcnRouteType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#vcn_route_type CoreDrgAttachment#vcn_route_type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#type CoreDrgAttachment#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RouteTableId`<sup>Optional</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.routeTableId"></a>

```csharp
public string RouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}.

---

##### `VcnRouteType`<sup>Optional</sup> <a name="VcnRouteType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.vcnRouteType"></a>

```csharp
public string VcnRouteType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#vcn_route_type CoreDrgAttachment#vcn_route_type}.

---

### CoreDrgAttachmentTimeouts <a name="CoreDrgAttachmentTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#create CoreDrgAttachment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#delete CoreDrgAttachment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#update CoreDrgAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#create CoreDrgAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#delete CoreDrgAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#update CoreDrgAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgAttachmentNetworkDetailsOutputReference <a name="CoreDrgAttachmentNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgAttachmentNetworkDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetRouteTableId">ResetRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetVcnRouteType">ResetVcnRouteType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRouteTableId` <a name="ResetRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetRouteTableId"></a>

```csharp
private void ResetRouteTableId()
```

##### `ResetVcnRouteType` <a name="ResetVcnRouteType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetVcnRouteType"></a>

```csharp
private void ResetVcnRouteType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.ipsecConnectionId">IpsecConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.transportAttachmentId">TransportAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.transportOnlyMode">TransportOnlyMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.vcnRouteTypeInput">VcnRouteTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.routeTableId">RouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.vcnRouteType">VcnRouteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `IpsecConnectionId`<sup>Required</sup> <a name="IpsecConnectionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.ipsecConnectionId"></a>

```csharp
public string IpsecConnectionId { get; }
```

- *Type:* string

---

##### `TransportAttachmentId`<sup>Required</sup> <a name="TransportAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.transportAttachmentId"></a>

```csharp
public string TransportAttachmentId { get; }
```

- *Type:* string

---

##### `TransportOnlyMode`<sup>Required</sup> <a name="TransportOnlyMode" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.transportOnlyMode"></a>

```csharp
public IResolvable TransportOnlyMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.routeTableIdInput"></a>

```csharp
public string RouteTableIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VcnRouteTypeInput`<sup>Optional</sup> <a name="VcnRouteTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.vcnRouteTypeInput"></a>

```csharp
public string VcnRouteTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.routeTableId"></a>

```csharp
public string RouteTableId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VcnRouteType`<sup>Required</sup> <a name="VcnRouteType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.vcnRouteType"></a>

```csharp
public string VcnRouteType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreDrgAttachmentNetworkDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a>

---


### CoreDrgAttachmentTimeoutsOutputReference <a name="CoreDrgAttachmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreDrgAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



