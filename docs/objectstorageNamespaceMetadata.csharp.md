# `objectstorageNamespaceMetadata` Submodule <a name="`objectstorageNamespaceMetadata` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageNamespaceMetadata <a name="ObjectstorageNamespaceMetadata" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata oci_objectstorage_namespace_metadata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageNamespaceMetadata(Construct Scope, string Id, ObjectstorageNamespaceMetadataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig">ObjectstorageNamespaceMetadataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig">ObjectstorageNamespaceMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetDefaultS3CompartmentId">ResetDefaultS3CompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetDefaultSwiftCompartmentId">ResetDefaultSwiftCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.putTimeouts"></a>

```csharp
private void PutTimeouts(ObjectstorageNamespaceMetadataTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a>

---

##### `ResetDefaultS3CompartmentId` <a name="ResetDefaultS3CompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetDefaultS3CompartmentId"></a>

```csharp
private void ResetDefaultS3CompartmentId()
```

##### `ResetDefaultSwiftCompartmentId` <a name="ResetDefaultSwiftCompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetDefaultSwiftCompartmentId"></a>

```csharp
private void ResetDefaultSwiftCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageNamespaceMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ObjectstorageNamespaceMetadata.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ObjectstorageNamespaceMetadata.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ObjectstorageNamespaceMetadata.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ObjectstorageNamespaceMetadata.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObjectstorageNamespaceMetadata resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstorageNamespaceMetadata to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstorageNamespaceMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageNamespaceMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference">ObjectstorageNamespaceMetadataTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultS3CompartmentIdInput">DefaultS3CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultSwiftCompartmentIdInput">DefaultSwiftCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultS3CompartmentId">DefaultS3CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultSwiftCompartmentId">DefaultSwiftCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.timeouts"></a>

```csharp
public ObjectstorageNamespaceMetadataTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference">ObjectstorageNamespaceMetadataTimeoutsOutputReference</a>

---

##### `DefaultS3CompartmentIdInput`<sup>Optional</sup> <a name="DefaultS3CompartmentIdInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultS3CompartmentIdInput"></a>

```csharp
public string DefaultS3CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefaultSwiftCompartmentIdInput`<sup>Optional</sup> <a name="DefaultSwiftCompartmentIdInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultSwiftCompartmentIdInput"></a>

```csharp
public string DefaultSwiftCompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefaultS3CompartmentId`<sup>Required</sup> <a name="DefaultS3CompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultS3CompartmentId"></a>

```csharp
public string DefaultS3CompartmentId { get; }
```

- *Type:* string

---

##### `DefaultSwiftCompartmentId`<sup>Required</sup> <a name="DefaultSwiftCompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.defaultSwiftCompartmentId"></a>

```csharp
public string DefaultSwiftCompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadata.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageNamespaceMetadataConfig <a name="ObjectstorageNamespaceMetadataConfig" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageNamespaceMetadataConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Namespace,
    string DefaultS3CompartmentId = null,
    string DefaultSwiftCompartmentId = null,
    string Id = null,
    ObjectstorageNamespaceMetadataTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#namespace ObjectstorageNamespaceMetadata#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.defaultS3CompartmentId">DefaultS3CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#default_s3compartment_id ObjectstorageNamespaceMetadata#default_s3compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.defaultSwiftCompartmentId">DefaultSwiftCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#default_swift_compartment_id ObjectstorageNamespaceMetadata#default_swift_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#id ObjectstorageNamespaceMetadata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#namespace ObjectstorageNamespaceMetadata#namespace}.

---

##### `DefaultS3CompartmentId`<sup>Optional</sup> <a name="DefaultS3CompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.defaultS3CompartmentId"></a>

```csharp
public string DefaultS3CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#default_s3compartment_id ObjectstorageNamespaceMetadata#default_s3compartment_id}.

---

##### `DefaultSwiftCompartmentId`<sup>Optional</sup> <a name="DefaultSwiftCompartmentId" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.defaultSwiftCompartmentId"></a>

```csharp
public string DefaultSwiftCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#default_swift_compartment_id ObjectstorageNamespaceMetadata#default_swift_compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#id ObjectstorageNamespaceMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataConfig.property.timeouts"></a>

```csharp
public ObjectstorageNamespaceMetadataTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts">ObjectstorageNamespaceMetadataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#timeouts ObjectstorageNamespaceMetadata#timeouts}

---

### ObjectstorageNamespaceMetadataTimeouts <a name="ObjectstorageNamespaceMetadataTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageNamespaceMetadataTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#create ObjectstorageNamespaceMetadata#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#delete ObjectstorageNamespaceMetadata#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#update ObjectstorageNamespaceMetadata#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#create ObjectstorageNamespaceMetadata#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#delete ObjectstorageNamespaceMetadata#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_namespace_metadata#update ObjectstorageNamespaceMetadata#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageNamespaceMetadataTimeoutsOutputReference <a name="ObjectstorageNamespaceMetadataTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ObjectstorageNamespaceMetadataTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.objectstorageNamespaceMetadata.ObjectstorageNamespaceMetadataTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



