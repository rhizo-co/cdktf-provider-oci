# `artifactsContainerImageSignature` Submodule <a name="`artifactsContainerImageSignature` Submodule" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactsContainerImageSignature <a name="ArtifactsContainerImageSignature" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature oci_artifacts_container_image_signature}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ArtifactsContainerImageSignature(Construct Scope, string Id, ArtifactsContainerImageSignatureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig">ArtifactsContainerImageSignatureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig">ArtifactsContainerImageSignatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.putTimeouts"></a>

```csharp
private void PutTimeouts(ArtifactsContainerImageSignatureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArtifactsContainerImageSignature resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ArtifactsContainerImageSignature.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ArtifactsContainerImageSignature.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ArtifactsContainerImageSignature.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ArtifactsContainerImageSignature.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ArtifactsContainerImageSignature resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactsContainerImageSignature to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactsContainerImageSignature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactsContainerImageSignature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference">ArtifactsContainerImageSignatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signingAlgorithmInput">SigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeouts"></a>

```csharp
public ArtifactsContainerImageSignatureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference">ArtifactsContainerImageSignatureTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `SigningAlgorithmInput`<sup>Optional</sup> <a name="SigningAlgorithmInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signingAlgorithmInput"></a>

```csharp
public string SigningAlgorithmInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactsContainerImageSignatureConfig <a name="ArtifactsContainerImageSignatureConfig" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ArtifactsContainerImageSignatureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ImageId,
    string KmsKeyId,
    string KmsKeyVersionId,
    string Message,
    string Signature,
    string SigningAlgorithm,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    ArtifactsContainerImageSignatureTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#compartment_id ArtifactsContainerImageSignature#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#image_id ArtifactsContainerImageSignature#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_id ArtifactsContainerImageSignature#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_version_id ArtifactsContainerImageSignature#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#message ArtifactsContainerImageSignature#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.signature">Signature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signature ArtifactsContainerImageSignature#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signing_algorithm ArtifactsContainerImageSignature#signing_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#defined_tags ArtifactsContainerImageSignature#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#freeform_tags ArtifactsContainerImageSignature#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#id ArtifactsContainerImageSignature#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#compartment_id ArtifactsContainerImageSignature#compartment_id}.

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#image_id ArtifactsContainerImageSignature#image_id}.

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_id ArtifactsContainerImageSignature#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_version_id ArtifactsContainerImageSignature#kms_key_version_id}.

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#message ArtifactsContainerImageSignature#message}.

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signature ArtifactsContainerImageSignature#signature}.

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signing_algorithm ArtifactsContainerImageSignature#signing_algorithm}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#defined_tags ArtifactsContainerImageSignature#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#freeform_tags ArtifactsContainerImageSignature#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#id ArtifactsContainerImageSignature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.timeouts"></a>

```csharp
public ArtifactsContainerImageSignatureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#timeouts ArtifactsContainerImageSignature#timeouts}

---

### ArtifactsContainerImageSignatureTimeouts <a name="ArtifactsContainerImageSignatureTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ArtifactsContainerImageSignatureTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#create ArtifactsContainerImageSignature#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#delete ArtifactsContainerImageSignature#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#update ArtifactsContainerImageSignature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#create ArtifactsContainerImageSignature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#delete ArtifactsContainerImageSignature#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#update ArtifactsContainerImageSignature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactsContainerImageSignatureTimeoutsOutputReference <a name="ArtifactsContainerImageSignatureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ArtifactsContainerImageSignatureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



