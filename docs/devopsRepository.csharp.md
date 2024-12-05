# `devopsRepository` Submodule <a name="`devopsRepository` Submodule" id="rhizo-co-terraform-provider-oci.devopsRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsRepository <a name="DevopsRepository" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository oci_devops_repository}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsRepository(Construct Scope, string Id, DevopsRepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig">DevopsRepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig">DevopsRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.putMirrorRepositoryConfig">PutMirrorRepositoryConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetMirrorRepositoryConfig">ResetMirrorRepositoryConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetParentRepositoryId">ResetParentRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMirrorRepositoryConfig` <a name="PutMirrorRepositoryConfig" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.putMirrorRepositoryConfig"></a>

```csharp
private void PutMirrorRepositoryConfig(DevopsRepositoryMirrorRepositoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.putMirrorRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig">DevopsRepositoryMirrorRepositoryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.putTimeouts"></a>

```csharp
private void PutTimeouts(DevopsRepositoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts">DevopsRepositoryTimeouts</a>

---

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetDefaultBranch"></a>

```csharp
private void ResetDefaultBranch()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMirrorRepositoryConfig` <a name="ResetMirrorRepositoryConfig" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetMirrorRepositoryConfig"></a>

```csharp
private void ResetMirrorRepositoryConfig()
```

##### `ResetParentRepositoryId` <a name="ResetParentRepositoryId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetParentRepositoryId"></a>

```csharp
private void ResetParentRepositoryId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsRepository resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsRepository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsRepository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsRepository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsRepository.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DevopsRepository resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsRepository to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DevopsRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.branchCount">BranchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.commitCount">CommitCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.httpUrl">HttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.mirrorRepositoryConfig">MirrorRepositoryConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference">DevopsRepositoryMirrorRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.sshUrl">SshUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference">DevopsRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.triggerBuildEvents">TriggerBuildEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.mirrorRepositoryConfigInput">MirrorRepositoryConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig">DevopsRepositoryMirrorRepositoryConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.parentRepositoryIdInput">ParentRepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.repositoryTypeInput">RepositoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.parentRepositoryId">ParentRepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.repositoryType">RepositoryType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BranchCount`<sup>Required</sup> <a name="BranchCount" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.branchCount"></a>

```csharp
public double BranchCount { get; }
```

- *Type:* double

---

##### `CommitCount`<sup>Required</sup> <a name="CommitCount" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.commitCount"></a>

```csharp
public double CommitCount { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.httpUrl"></a>

```csharp
public string HttpUrl { get; }
```

- *Type:* string

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `MirrorRepositoryConfig`<sup>Required</sup> <a name="MirrorRepositoryConfig" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.mirrorRepositoryConfig"></a>

```csharp
public DevopsRepositoryMirrorRepositoryConfigOutputReference MirrorRepositoryConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference">DevopsRepositoryMirrorRepositoryConfigOutputReference</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `SshUrl`<sup>Required</sup> <a name="SshUrl" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.sshUrl"></a>

```csharp
public string SshUrl { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.timeouts"></a>

```csharp
public DevopsRepositoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference">DevopsRepositoryTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TriggerBuildEvents`<sup>Required</sup> <a name="TriggerBuildEvents" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.triggerBuildEvents"></a>

```csharp
public string[] TriggerBuildEvents { get; }
```

- *Type:* string[]

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.defaultBranchInput"></a>

```csharp
public string DefaultBranchInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MirrorRepositoryConfigInput`<sup>Optional</sup> <a name="MirrorRepositoryConfigInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.mirrorRepositoryConfigInput"></a>

```csharp
public DevopsRepositoryMirrorRepositoryConfig MirrorRepositoryConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig">DevopsRepositoryMirrorRepositoryConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentRepositoryIdInput`<sup>Optional</sup> <a name="ParentRepositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.parentRepositoryIdInput"></a>

```csharp
public string ParentRepositoryIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RepositoryTypeInput`<sup>Optional</sup> <a name="RepositoryTypeInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.repositoryTypeInput"></a>

```csharp
public string RepositoryTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentRepositoryId`<sup>Required</sup> <a name="ParentRepositoryId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.parentRepositoryId"></a>

```csharp
public string ParentRepositoryId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RepositoryType`<sup>Required</sup> <a name="RepositoryType" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.repositoryType"></a>

```csharp
public string RepositoryType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsRepositoryConfig <a name="DevopsRepositoryConfig" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsRepositoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ProjectId,
    string RepositoryType,
    string DefaultBranch = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DevopsRepositoryMirrorRepositoryConfig MirrorRepositoryConfig = null,
    string ParentRepositoryId = null,
    DevopsRepositoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#name DevopsRepository#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#project_id DevopsRepository#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.repositoryType">RepositoryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#repository_type DevopsRepository#repository_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#default_branch DevopsRepository#default_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#defined_tags DevopsRepository#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#description DevopsRepository#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#freeform_tags DevopsRepository#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#id DevopsRepository#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.mirrorRepositoryConfig">MirrorRepositoryConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig">DevopsRepositoryMirrorRepositoryConfig</a></code> | mirror_repository_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.parentRepositoryId">ParentRepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#parent_repository_id DevopsRepository#parent_repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts">DevopsRepositoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#name DevopsRepository#name}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#project_id DevopsRepository#project_id}.

---

##### `RepositoryType`<sup>Required</sup> <a name="RepositoryType" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.repositoryType"></a>

```csharp
public string RepositoryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#repository_type DevopsRepository#repository_type}.

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#default_branch DevopsRepository#default_branch}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#defined_tags DevopsRepository#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#description DevopsRepository#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#freeform_tags DevopsRepository#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#id DevopsRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MirrorRepositoryConfig`<sup>Optional</sup> <a name="MirrorRepositoryConfig" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.mirrorRepositoryConfig"></a>

```csharp
public DevopsRepositoryMirrorRepositoryConfig MirrorRepositoryConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig">DevopsRepositoryMirrorRepositoryConfig</a>

mirror_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#mirror_repository_config DevopsRepository#mirror_repository_config}

---

##### `ParentRepositoryId`<sup>Optional</sup> <a name="ParentRepositoryId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.parentRepositoryId"></a>

```csharp
public string ParentRepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#parent_repository_id DevopsRepository#parent_repository_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryConfig.property.timeouts"></a>

```csharp
public DevopsRepositoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts">DevopsRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#timeouts DevopsRepository#timeouts}

---

### DevopsRepositoryMirrorRepositoryConfig <a name="DevopsRepositoryMirrorRepositoryConfig" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsRepositoryMirrorRepositoryConfig {
    string ConnectorId = null,
    string RepositoryUrl = null,
    DevopsRepositoryMirrorRepositoryConfigTriggerSchedule TriggerSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig.property.connectorId">ConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#connector_id DevopsRepository#connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#repository_url DevopsRepository#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig.property.triggerSchedule">TriggerSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule">DevopsRepositoryMirrorRepositoryConfigTriggerSchedule</a></code> | trigger_schedule block. |

---

##### `ConnectorId`<sup>Optional</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig.property.connectorId"></a>

```csharp
public string ConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#connector_id DevopsRepository#connector_id}.

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#repository_url DevopsRepository#repository_url}.

---

##### `TriggerSchedule`<sup>Optional</sup> <a name="TriggerSchedule" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig.property.triggerSchedule"></a>

```csharp
public DevopsRepositoryMirrorRepositoryConfigTriggerSchedule TriggerSchedule { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule">DevopsRepositoryMirrorRepositoryConfigTriggerSchedule</a>

trigger_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#trigger_schedule DevopsRepository#trigger_schedule}

---

### DevopsRepositoryMirrorRepositoryConfigTriggerSchedule <a name="DevopsRepositoryMirrorRepositoryConfigTriggerSchedule" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsRepositoryMirrorRepositoryConfigTriggerSchedule {
    string ScheduleType,
    string CustomSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule.property.scheduleType">ScheduleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#schedule_type DevopsRepository#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule.property.customSchedule">CustomSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#custom_schedule DevopsRepository#custom_schedule}. |

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule.property.scheduleType"></a>

```csharp
public string ScheduleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#schedule_type DevopsRepository#schedule_type}.

---

##### `CustomSchedule`<sup>Optional</sup> <a name="CustomSchedule" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule.property.customSchedule"></a>

```csharp
public string CustomSchedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#custom_schedule DevopsRepository#custom_schedule}.

---

### DevopsRepositoryTimeouts <a name="DevopsRepositoryTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsRepositoryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#create DevopsRepository#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#delete DevopsRepository#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#update DevopsRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#create DevopsRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#delete DevopsRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository#update DevopsRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsRepositoryMirrorRepositoryConfigOutputReference <a name="DevopsRepositoryMirrorRepositoryConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsRepositoryMirrorRepositoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.putTriggerSchedule">PutTriggerSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resetConnectorId">ResetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resetTriggerSchedule">ResetTriggerSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerSchedule` <a name="PutTriggerSchedule" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.putTriggerSchedule"></a>

```csharp
private void PutTriggerSchedule(DevopsRepositoryMirrorRepositoryConfigTriggerSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.putTriggerSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule">DevopsRepositoryMirrorRepositoryConfigTriggerSchedule</a>

---

##### `ResetConnectorId` <a name="ResetConnectorId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resetConnectorId"></a>

```csharp
private void ResetConnectorId()
```

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resetRepositoryUrl"></a>

```csharp
private void ResetRepositoryUrl()
```

##### `ResetTriggerSchedule` <a name="ResetTriggerSchedule" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.resetTriggerSchedule"></a>

```csharp
private void ResetTriggerSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.triggerSchedule">TriggerSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference">DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.connectorIdInput">ConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.triggerScheduleInput">TriggerScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule">DevopsRepositoryMirrorRepositoryConfigTriggerSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig">DevopsRepositoryMirrorRepositoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TriggerSchedule`<sup>Required</sup> <a name="TriggerSchedule" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.triggerSchedule"></a>

```csharp
public DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference TriggerSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference">DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference</a>

---

##### `ConnectorIdInput`<sup>Optional</sup> <a name="ConnectorIdInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.connectorIdInput"></a>

```csharp
public string ConnectorIdInput { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `TriggerScheduleInput`<sup>Optional</sup> <a name="TriggerScheduleInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.triggerScheduleInput"></a>

```csharp
public DevopsRepositoryMirrorRepositoryConfigTriggerSchedule TriggerScheduleInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule">DevopsRepositoryMirrorRepositoryConfigTriggerSchedule</a>

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigOutputReference.property.internalValue"></a>

```csharp
public DevopsRepositoryMirrorRepositoryConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfig">DevopsRepositoryMirrorRepositoryConfig</a>

---


### DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference <a name="DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.resetCustomSchedule">ResetCustomSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSchedule` <a name="ResetCustomSchedule" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.resetCustomSchedule"></a>

```csharp
private void ResetCustomSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.customScheduleInput">CustomScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.scheduleTypeInput">ScheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.customSchedule">CustomSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.scheduleType">ScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule">DevopsRepositoryMirrorRepositoryConfigTriggerSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomScheduleInput`<sup>Optional</sup> <a name="CustomScheduleInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.customScheduleInput"></a>

```csharp
public string CustomScheduleInput { get; }
```

- *Type:* string

---

##### `ScheduleTypeInput`<sup>Optional</sup> <a name="ScheduleTypeInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.scheduleTypeInput"></a>

```csharp
public string ScheduleTypeInput { get; }
```

- *Type:* string

---

##### `CustomSchedule`<sup>Required</sup> <a name="CustomSchedule" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.customSchedule"></a>

```csharp
public string CustomSchedule { get; }
```

- *Type:* string

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.scheduleType"></a>

```csharp
public string ScheduleType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerScheduleOutputReference.property.internalValue"></a>

```csharp
public DevopsRepositoryMirrorRepositoryConfigTriggerSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryMirrorRepositoryConfigTriggerSchedule">DevopsRepositoryMirrorRepositoryConfigTriggerSchedule</a>

---


### DevopsRepositoryTimeoutsOutputReference <a name="DevopsRepositoryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsRepositoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepository.DevopsRepositoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



