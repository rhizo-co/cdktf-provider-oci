# `objectstorageObject` Submodule <a name="`objectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObject <a name="ObjectstorageObject" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageObject(Construct Scope, string Id, ObjectstorageObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig">ObjectstorageObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig">ObjectstorageObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails">PutSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentMd5">ResetContentMd5</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetDeleteAllObjectVersions">ResetDeleteAllObjectVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOpcSseKmsKeyId">ResetOpcSseKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSourceUriDetails">ResetSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetStorageTier">ResetStorageTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceUriDetails` <a name="PutSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails"></a>

```csharp
private void PutSourceUriDetails(ObjectstorageObjectSourceUriDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts"></a>

```csharp
private void PutTimeouts(ObjectstorageObjectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetContent` <a name="ResetContent" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentMd5` <a name="ResetContentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentMd5"></a>

```csharp
private void ResetContentMd5()
```

##### `ResetContentType` <a name="ResetContentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetDeleteAllObjectVersions` <a name="ResetDeleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetDeleteAllObjectVersions"></a>

```csharp
private void ResetDeleteAllObjectVersions()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetOpcSseKmsKeyId` <a name="ResetOpcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOpcSseKmsKeyId"></a>

```csharp
private void ResetOpcSseKmsKeyId()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourceUriDetails` <a name="ResetSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSourceUriDetails"></a>

```csharp
private void ResetSourceUriDetails()
```

##### `ResetStorageTier` <a name="ResetStorageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetStorageTier"></a>

```csharp
private void ResetStorageTier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ObjectstorageObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ObjectstorageObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ObjectstorageObject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ObjectstorageObject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstorageObject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLength">ContentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetails">SourceUriDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference">ObjectstorageObjectSourceUriDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference">ObjectstorageObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5Input">ContentMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersionsInput">DeleteAllObjectVersionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyIdInput">OpcSseKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetailsInput">SourceUriDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTierInput">StorageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5">ContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersions">DeleteAllObjectVersions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyId">OpcSseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTier">StorageTier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLength"></a>

```csharp
public string ContentLength { get; }
```

- *Type:* string

---

##### `SourceUriDetails`<sup>Required</sup> <a name="SourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetails"></a>

```csharp
public ObjectstorageObjectSourceUriDetailsOutputReference SourceUriDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference">ObjectstorageObjectSourceUriDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeouts"></a>

```csharp
public ObjectstorageObjectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference">ObjectstorageObjectTimeoutsOutputReference</a>

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentMd5Input`<sup>Optional</sup> <a name="ContentMd5Input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5Input"></a>

```csharp
public string ContentMd5Input { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `DeleteAllObjectVersionsInput`<sup>Optional</sup> <a name="DeleteAllObjectVersionsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersionsInput"></a>

```csharp
public object DeleteAllObjectVersionsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `OpcSseKmsKeyIdInput`<sup>Optional</sup> <a name="OpcSseKmsKeyIdInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyIdInput"></a>

```csharp
public string OpcSseKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `SourceUriDetailsInput`<sup>Optional</sup> <a name="SourceUriDetailsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetailsInput"></a>

```csharp
public ObjectstorageObjectSourceUriDetails SourceUriDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---

##### `StorageTierInput`<sup>Optional</sup> <a name="StorageTierInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTierInput"></a>

```csharp
public string StorageTierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5"></a>

```csharp
public string ContentMd5 { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `DeleteAllObjectVersions`<sup>Required</sup> <a name="DeleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersions"></a>

```csharp
public object DeleteAllObjectVersions { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `OpcSseKmsKeyId`<sup>Required</sup> <a name="OpcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyId"></a>

```csharp
public string OpcSseKmsKeyId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTier"></a>

```csharp
public string StorageTier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectConfig <a name="ObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageObjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Namespace,
    string Object,
    string CacheControl = null,
    string Content = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentMd5 = null,
    string ContentType = null,
    object DeleteAllObjectVersions = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string OpcSseKmsKeyId = null,
    string Source = null,
    ObjectstorageObjectSourceUriDetails SourceUriDetails = null,
    string StorageTier = null,
    ObjectstorageObjectTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.cacheControl">CacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentMd5">ContentMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.deleteAllObjectVersions">DeleteAllObjectVersions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.opcSseKmsKeyId">OpcSseKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.sourceUriDetails">SourceUriDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | source_uri_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.storageTier">StorageTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}.

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}.

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}.

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}.

---

##### `ContentMd5`<sup>Optional</sup> <a name="ContentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentMd5"></a>

```csharp
public string ContentMd5 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}.

---

##### `DeleteAllObjectVersions`<sup>Optional</sup> <a name="DeleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.deleteAllObjectVersions"></a>

```csharp
public object DeleteAllObjectVersions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}.

---

##### `OpcSseKmsKeyId`<sup>Optional</sup> <a name="OpcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.opcSseKmsKeyId"></a>

```csharp
public string OpcSseKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}.

---

##### `SourceUriDetails`<sup>Optional</sup> <a name="SourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.sourceUriDetails"></a>

```csharp
public ObjectstorageObjectSourceUriDetails SourceUriDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

source_uri_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_uri_details ObjectstorageObject#source_uri_details}

---

##### `StorageTier`<sup>Optional</sup> <a name="StorageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.storageTier"></a>

```csharp
public string StorageTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.timeouts"></a>

```csharp
public ObjectstorageObjectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#timeouts ObjectstorageObject#timeouts}

---

### ObjectstorageObjectSourceUriDetails <a name="ObjectstorageObjectSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageObjectSourceUriDetails {
    string Bucket,
    string Namespace,
    string Object,
    string Region,
    string DestinationObjectIfMatchEtag = null,
    string DestinationObjectIfNoneMatchEtag = null,
    string SourceObjectIfMatchEtag = null,
    string SourceVersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfMatchEtag">DestinationObjectIfMatchEtag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfNoneMatchEtag">DestinationObjectIfNoneMatchEtag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceObjectIfMatchEtag">SourceObjectIfMatchEtag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceVersionId">SourceVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}.

---

##### `DestinationObjectIfMatchEtag`<sup>Optional</sup> <a name="DestinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfMatchEtag"></a>

```csharp
public string DestinationObjectIfMatchEtag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}.

---

##### `DestinationObjectIfNoneMatchEtag`<sup>Optional</sup> <a name="DestinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfNoneMatchEtag"></a>

```csharp
public string DestinationObjectIfNoneMatchEtag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}.

---

##### `SourceObjectIfMatchEtag`<sup>Optional</sup> <a name="SourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceObjectIfMatchEtag"></a>

```csharp
public string SourceObjectIfMatchEtag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}.

---

##### `SourceVersionId`<sup>Optional</sup> <a name="SourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceVersionId"></a>

```csharp
public string SourceVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}.

---

### ObjectstorageObjectTimeouts <a name="ObjectstorageObjectTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageObjectTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageObjectSourceUriDetailsOutputReference <a name="ObjectstorageObjectSourceUriDetailsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageObjectSourceUriDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfMatchEtag">ResetDestinationObjectIfMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfNoneMatchEtag">ResetDestinationObjectIfNoneMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceObjectIfMatchEtag">ResetSourceObjectIfMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceVersionId">ResetSourceVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationObjectIfMatchEtag` <a name="ResetDestinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfMatchEtag"></a>

```csharp
private void ResetDestinationObjectIfMatchEtag()
```

##### `ResetDestinationObjectIfNoneMatchEtag` <a name="ResetDestinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfNoneMatchEtag"></a>

```csharp
private void ResetDestinationObjectIfNoneMatchEtag()
```

##### `ResetSourceObjectIfMatchEtag` <a name="ResetSourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceObjectIfMatchEtag"></a>

```csharp
private void ResetSourceObjectIfMatchEtag()
```

##### `ResetSourceVersionId` <a name="ResetSourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceVersionId"></a>

```csharp
private void ResetSourceVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtagInput">DestinationObjectIfMatchEtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtagInput">DestinationObjectIfNoneMatchEtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtagInput">SourceObjectIfMatchEtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionIdInput">SourceVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtag">DestinationObjectIfMatchEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtag">DestinationObjectIfNoneMatchEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtag">SourceObjectIfMatchEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionId">SourceVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DestinationObjectIfMatchEtagInput`<sup>Optional</sup> <a name="DestinationObjectIfMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtagInput"></a>

```csharp
public string DestinationObjectIfMatchEtagInput { get; }
```

- *Type:* string

---

##### `DestinationObjectIfNoneMatchEtagInput`<sup>Optional</sup> <a name="DestinationObjectIfNoneMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtagInput"></a>

```csharp
public string DestinationObjectIfNoneMatchEtagInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SourceObjectIfMatchEtagInput`<sup>Optional</sup> <a name="SourceObjectIfMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtagInput"></a>

```csharp
public string SourceObjectIfMatchEtagInput { get; }
```

- *Type:* string

---

##### `SourceVersionIdInput`<sup>Optional</sup> <a name="SourceVersionIdInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionIdInput"></a>

```csharp
public string SourceVersionIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DestinationObjectIfMatchEtag`<sup>Required</sup> <a name="DestinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtag"></a>

```csharp
public string DestinationObjectIfMatchEtag { get; }
```

- *Type:* string

---

##### `DestinationObjectIfNoneMatchEtag`<sup>Required</sup> <a name="DestinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtag"></a>

```csharp
public string DestinationObjectIfNoneMatchEtag { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SourceObjectIfMatchEtag`<sup>Required</sup> <a name="SourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtag"></a>

```csharp
public string SourceObjectIfMatchEtag { get; }
```

- *Type:* string

---

##### `SourceVersionId`<sup>Required</sup> <a name="SourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionId"></a>

```csharp
public string SourceVersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.internalValue"></a>

```csharp
public ObjectstorageObjectSourceUriDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---


### ObjectstorageObjectTimeoutsOutputReference <a name="ObjectstorageObjectTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageObjectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



