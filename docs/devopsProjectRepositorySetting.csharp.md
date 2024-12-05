# `devopsProjectRepositorySetting` Submodule <a name="`devopsProjectRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsProjectRepositorySetting <a name="DevopsProjectRepositorySetting" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting oci_devops_project_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySetting(Construct Scope, string Id, DevopsProjectRepositorySettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig">DevopsProjectRepositorySettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig">DevopsProjectRepositorySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules">PutApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings">PutMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules">ResetApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings">ResetMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalRules` <a name="PutApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules"></a>

```csharp
private void PutApprovalRules(DevopsProjectRepositorySettingApprovalRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `PutMergeSettings` <a name="PutMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings"></a>

```csharp
private void PutMergeSettings(DevopsProjectRepositorySettingMergeSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts"></a>

```csharp
private void PutTimeouts(DevopsProjectRepositorySettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

---

##### `ResetApprovalRules` <a name="ResetApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules"></a>

```csharp
private void ResetApprovalRules()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMergeSettings` <a name="ResetMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings"></a>

```csharp
private void ResetMergeSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsProjectRepositorySetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsProjectRepositorySetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsProjectRepositorySetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsProjectRepositorySetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsProjectRepositorySetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsProjectRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DevopsProjectRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules">ApprovalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings">MergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput">ApprovalRulesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput">MergeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApprovalRules`<sup>Required</sup> <a name="ApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules"></a>

```csharp
public DevopsProjectRepositorySettingApprovalRulesOutputReference ApprovalRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a>

---

##### `MergeSettings`<sup>Required</sup> <a name="MergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings"></a>

```csharp
public DevopsProjectRepositorySettingMergeSettingsOutputReference MergeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts"></a>

```csharp
public DevopsProjectRepositorySettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a>

---

##### `ApprovalRulesInput`<sup>Optional</sup> <a name="ApprovalRulesInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput"></a>

```csharp
public DevopsProjectRepositorySettingApprovalRules ApprovalRulesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MergeSettingsInput`<sup>Optional</sup> <a name="MergeSettingsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput"></a>

```csharp
public DevopsProjectRepositorySettingMergeSettings MergeSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsProjectRepositorySettingApprovalRules <a name="DevopsProjectRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingApprovalRules {
    object Items
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#items DevopsProjectRepositorySetting#items}

---

### DevopsProjectRepositorySettingApprovalRulesItems <a name="DevopsProjectRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingApprovalRulesItems {
    double MinApprovalsCount,
    string Name,
    string DestinationBranch = null,
    object Reviewers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount">MinApprovalsCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch">DestinationBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers">Reviewers</a></code> | <code>object</code> | reviewers block. |

---

##### `MinApprovalsCount`<sup>Required</sup> <a name="MinApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount"></a>

```csharp
public double MinApprovalsCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}.

---

##### `DestinationBranch`<sup>Optional</sup> <a name="DestinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch"></a>

```csharp
public string DestinationBranch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}.

---

##### `Reviewers`<sup>Optional</sup> <a name="Reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers"></a>

```csharp
public object Reviewers { get; set; }
```

- *Type:* object

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#reviewers DevopsProjectRepositorySetting#reviewers}

---

### DevopsProjectRepositorySettingApprovalRulesItemsReviewers <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingApprovalRulesItemsReviewers {
    string PrincipalId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId">PrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}.

---

### DevopsProjectRepositorySettingConfig <a name="DevopsProjectRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    DevopsProjectRepositorySettingApprovalRules ApprovalRules = null,
    string Id = null,
    DevopsProjectRepositorySettingMergeSettings MergeSettings = null,
    DevopsProjectRepositorySettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules">ApprovalRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings">MergeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}.

---

##### `ApprovalRules`<sup>Optional</sup> <a name="ApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules"></a>

```csharp
public DevopsProjectRepositorySettingApprovalRules ApprovalRules { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#approval_rules DevopsProjectRepositorySetting#approval_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MergeSettings`<sup>Optional</sup> <a name="MergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings"></a>

```csharp
public DevopsProjectRepositorySettingMergeSettings MergeSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#merge_settings DevopsProjectRepositorySetting#merge_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts"></a>

```csharp
public DevopsProjectRepositorySettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#timeouts DevopsProjectRepositorySetting#timeouts}

---

### DevopsProjectRepositorySettingMergeSettings <a name="DevopsProjectRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingMergeSettings {
    string[] AllowedMergeStrategies,
    string DefaultMergeStrategy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies">AllowedMergeStrategies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy">DefaultMergeStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}. |

---

##### `AllowedMergeStrategies`<sup>Required</sup> <a name="AllowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies"></a>

```csharp
public string[] AllowedMergeStrategies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}.

---

##### `DefaultMergeStrategy`<sup>Required</sup> <a name="DefaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy"></a>

```csharp
public string DefaultMergeStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}.

---

### DevopsProjectRepositorySettingTimeouts <a name="DevopsProjectRepositorySettingTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsProjectRepositorySettingApprovalRulesItemsList <a name="DevopsProjectRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingApprovalRulesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get"></a>

```csharp
private DevopsProjectRepositorySettingApprovalRulesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsProjectRepositorySettingApprovalRulesItemsOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingApprovalRulesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers">PutReviewers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch">ResetDestinationBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers">ResetReviewers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReviewers` <a name="PutReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers"></a>

```csharp
private void PutReviewers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers.parameter.value"></a>

- *Type:* object

---

##### `ResetDestinationBranch` <a name="ResetDestinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch"></a>

```csharp
private void ResetDestinationBranch()
```

##### `ResetReviewers` <a name="ResetReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers"></a>

```csharp
private void ResetReviewers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">Reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput">DestinationBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput">MinApprovalsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput">ReviewersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">DestinationBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">MinApprovalsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Reviewers`<sup>Required</sup> <a name="Reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```csharp
public DevopsProjectRepositorySettingApprovalRulesItemsReviewersList Reviewers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `DestinationBranchInput`<sup>Optional</sup> <a name="DestinationBranchInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput"></a>

```csharp
public string DestinationBranchInput { get; }
```

- *Type:* string

---

##### `MinApprovalsCountInput`<sup>Optional</sup> <a name="MinApprovalsCountInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput"></a>

```csharp
public double MinApprovalsCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReviewersInput`<sup>Optional</sup> <a name="ReviewersInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput"></a>

```csharp
public object ReviewersInput { get; }
```

- *Type:* object

---

##### `DestinationBranch`<sup>Required</sup> <a name="DestinationBranch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```csharp
public string DestinationBranch { get; }
```

- *Type:* string

---

##### `MinApprovalsCount`<sup>Required</sup> <a name="MinApprovalsCount" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```csharp
public double MinApprovalsCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersList <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingApprovalRulesItemsReviewersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```csharp
private DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">PrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">PrincipalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```csharp
public string PrincipalName { get; }
```

- *Type:* string

---

##### `PrincipalState`<sup>Required</sup> <a name="PrincipalState" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```csharp
public string PrincipalState { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsProjectRepositorySettingApprovalRulesOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingApprovalRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items"></a>

```csharp
public DevopsProjectRepositorySettingApprovalRulesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```csharp
public DevopsProjectRepositorySettingApprovalRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---


### DevopsProjectRepositorySettingMergeSettingsOutputReference <a name="DevopsProjectRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingMergeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput">AllowedMergeStrategiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput">DefaultMergeStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">AllowedMergeStrategies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">DefaultMergeStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedMergeStrategiesInput`<sup>Optional</sup> <a name="AllowedMergeStrategiesInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput"></a>

```csharp
public string[] AllowedMergeStrategiesInput { get; }
```

- *Type:* string[]

---

##### `DefaultMergeStrategyInput`<sup>Optional</sup> <a name="DefaultMergeStrategyInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput"></a>

```csharp
public string DefaultMergeStrategyInput { get; }
```

- *Type:* string

---

##### `AllowedMergeStrategies`<sup>Required</sup> <a name="AllowedMergeStrategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```csharp
public string[] AllowedMergeStrategies { get; }
```

- *Type:* string[]

---

##### `DefaultMergeStrategy`<sup>Required</sup> <a name="DefaultMergeStrategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```csharp
public string DefaultMergeStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```csharp
public DevopsProjectRepositorySettingMergeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---


### DevopsProjectRepositorySettingTimeoutsOutputReference <a name="DevopsProjectRepositorySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsProjectRepositorySettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



