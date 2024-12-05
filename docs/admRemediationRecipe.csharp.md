# `admRemediationRecipe` Submodule <a name="`admRemediationRecipe` Submodule" id="rhizo-co-terraform-provider-oci.admRemediationRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdmRemediationRecipe <a name="AdmRemediationRecipe" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe oci_adm_remediation_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipe(Construct Scope, string Id, AdmRemediationRecipeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig">AdmRemediationRecipeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig">AdmRemediationRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration">PutDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration">PutScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration">PutVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetectConfiguration` <a name="PutDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration"></a>

```csharp
private void PutDetectConfiguration(AdmRemediationRecipeDetectConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(AdmRemediationRecipeNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `PutScmConfiguration` <a name="PutScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration"></a>

```csharp
private void PutScmConfiguration(AdmRemediationRecipeScmConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts"></a>

```csharp
private void PutTimeouts(AdmRemediationRecipeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

---

##### `PutVerifyConfiguration` <a name="PutVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration"></a>

```csharp
private void PutVerifyConfiguration(AdmRemediationRecipeVerifyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AdmRemediationRecipe.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AdmRemediationRecipe.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AdmRemediationRecipe.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AdmRemediationRecipe.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdmRemediationRecipe to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdmRemediationRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AdmRemediationRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration">DetectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration">ScmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration">VerifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput">DetectConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput">IsRunTriggeredOnKbChangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput">ScmConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput">VerifyConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange">IsRunTriggeredOnKbChange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DetectConfiguration`<sup>Required</sup> <a name="DetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration"></a>

```csharp
public AdmRemediationRecipeDetectConfigurationOutputReference DetectConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration"></a>

```csharp
public AdmRemediationRecipeNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a>

---

##### `ScmConfiguration`<sup>Required</sup> <a name="ScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration"></a>

```csharp
public AdmRemediationRecipeScmConfigurationOutputReference ScmConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts"></a>

```csharp
public AdmRemediationRecipeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VerifyConfiguration`<sup>Required</sup> <a name="VerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration"></a>

```csharp
public AdmRemediationRecipeVerifyConfigurationOutputReference VerifyConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DetectConfigurationInput`<sup>Optional</sup> <a name="DetectConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput"></a>

```csharp
public AdmRemediationRecipeDetectConfiguration DetectConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsRunTriggeredOnKbChangeInput`<sup>Optional</sup> <a name="IsRunTriggeredOnKbChangeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput"></a>

```csharp
public object IsRunTriggeredOnKbChangeInput { get; }
```

- *Type:* object

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput"></a>

```csharp
public string KnowledgeBaseIdInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput"></a>

```csharp
public AdmRemediationRecipeNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `ScmConfigurationInput`<sup>Optional</sup> <a name="ScmConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput"></a>

```csharp
public AdmRemediationRecipeScmConfiguration ScmConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VerifyConfigurationInput`<sup>Optional</sup> <a name="VerifyConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput"></a>

```csharp
public AdmRemediationRecipeVerifyConfiguration VerifyConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRunTriggeredOnKbChange`<sup>Required</sup> <a name="IsRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange"></a>

```csharp
public object IsRunTriggeredOnKbChange { get; }
```

- *Type:* object

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdmRemediationRecipeConfig <a name="AdmRemediationRecipeConfig" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    AdmRemediationRecipeDetectConfiguration DetectConfiguration,
    object IsRunTriggeredOnKbChange,
    string KnowledgeBaseId,
    AdmRemediationRecipeNetworkConfiguration NetworkConfiguration,
    AdmRemediationRecipeScmConfiguration ScmConfiguration,
    AdmRemediationRecipeVerifyConfiguration VerifyConfiguration,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string State = null,
    AdmRemediationRecipeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration">DetectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | detect_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange">IsRunTriggeredOnKbChange</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration">ScmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | scm_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration">VerifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | verify_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}.

---

##### `DetectConfiguration`<sup>Required</sup> <a name="DetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration"></a>

```csharp
public AdmRemediationRecipeDetectConfiguration DetectConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

detect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#detect_configuration AdmRemediationRecipe#detect_configuration}

---

##### `IsRunTriggeredOnKbChange`<sup>Required</sup> <a name="IsRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange"></a>

```csharp
public object IsRunTriggeredOnKbChange { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}.

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}.

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration"></a>

```csharp
public AdmRemediationRecipeNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#network_configuration AdmRemediationRecipe#network_configuration}

---

##### `ScmConfiguration`<sup>Required</sup> <a name="ScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration"></a>

```csharp
public AdmRemediationRecipeScmConfiguration ScmConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

scm_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_configuration AdmRemediationRecipe#scm_configuration}

---

##### `VerifyConfiguration`<sup>Required</sup> <a name="VerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration"></a>

```csharp
public AdmRemediationRecipeVerifyConfiguration VerifyConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

verify_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#verify_configuration AdmRemediationRecipe#verify_configuration}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts"></a>

```csharp
public AdmRemediationRecipeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#timeouts AdmRemediationRecipe#timeouts}

---

### AdmRemediationRecipeDetectConfiguration <a name="AdmRemediationRecipeDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeDetectConfiguration {
    string[] Exclusions = null,
    double MaxPermissibleCvssV2Score = null,
    double MaxPermissibleCvssV3Score = null,
    string MaxPermissibleSeverity = null,
    string UpgradePolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions">Exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score">MaxPermissibleCvssV2Score</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score">MaxPermissibleCvssV3Score</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity">MaxPermissibleSeverity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy">UpgradePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}. |

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}.

---

##### `MaxPermissibleCvssV2Score`<sup>Optional</sup> <a name="MaxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score"></a>

```csharp
public double MaxPermissibleCvssV2Score { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}.

---

##### `MaxPermissibleCvssV3Score`<sup>Optional</sup> <a name="MaxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score"></a>

```csharp
public double MaxPermissibleCvssV3Score { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}.

---

##### `MaxPermissibleSeverity`<sup>Optional</sup> <a name="MaxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity"></a>

```csharp
public string MaxPermissibleSeverity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}.

---

##### `UpgradePolicy`<sup>Optional</sup> <a name="UpgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy"></a>

```csharp
public string UpgradePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}.

---

### AdmRemediationRecipeNetworkConfiguration <a name="AdmRemediationRecipeNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeNetworkConfiguration {
    string SubnetId,
    string[] NsgIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}.

---

### AdmRemediationRecipeScmConfiguration <a name="AdmRemediationRecipeScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeScmConfiguration {
    string Branch,
    object IsAutomergeEnabled,
    string ScmType,
    string BuildFileLocation = null,
    string ExternalScmType = null,
    string OciCodeRepositoryId = null,
    string PatSecretId = null,
    string RepositoryUrl = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled">IsAutomergeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType">ScmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation">BuildFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType">ExternalScmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId">OciCodeRepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId">PatSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}.

---

##### `IsAutomergeEnabled`<sup>Required</sup> <a name="IsAutomergeEnabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled"></a>

```csharp
public object IsAutomergeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}.

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType"></a>

```csharp
public string ScmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}.

---

##### `BuildFileLocation`<sup>Optional</sup> <a name="BuildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation"></a>

```csharp
public string BuildFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}.

---

##### `ExternalScmType`<sup>Optional</sup> <a name="ExternalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType"></a>

```csharp
public string ExternalScmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}.

---

##### `OciCodeRepositoryId`<sup>Optional</sup> <a name="OciCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId"></a>

```csharp
public string OciCodeRepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}.

---

##### `PatSecretId`<sup>Optional</sup> <a name="PatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId"></a>

```csharp
public string PatSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

### AdmRemediationRecipeTimeouts <a name="AdmRemediationRecipeTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}.

---

### AdmRemediationRecipeVerifyConfiguration <a name="AdmRemediationRecipeVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeVerifyConfiguration {
    string BuildServiceType,
    System.Collections.Generic.IDictionary<string, string> AdditionalParameters = null,
    string JenkinsUrl = null,
    string JobName = null,
    string PatSecretId = null,
    string PipelineId = null,
    string RepositoryUrl = null,
    string TriggerSecretId = null,
    string Username = null,
    string WorkflowName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType">BuildServiceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters">AdditionalParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl">JenkinsUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName">JobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId">PatSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId">PipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId">TriggerSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName">WorkflowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}. |

---

##### `BuildServiceType`<sup>Required</sup> <a name="BuildServiceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType"></a>

```csharp
public string BuildServiceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}.

---

##### `AdditionalParameters`<sup>Optional</sup> <a name="AdditionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}.

---

##### `JenkinsUrl`<sup>Optional</sup> <a name="JenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl"></a>

```csharp
public string JenkinsUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}.

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}.

---

##### `PatSecretId`<sup>Optional</sup> <a name="PatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId"></a>

```csharp
public string PatSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId"></a>

```csharp
public string PipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}.

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `TriggerSecretId`<sup>Optional</sup> <a name="TriggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId"></a>

```csharp
public string TriggerSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName"></a>

```csharp
public string WorkflowName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdmRemediationRecipeDetectConfigurationOutputReference <a name="AdmRemediationRecipeDetectConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeDetectConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score">ResetMaxPermissibleCvssV2Score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score">ResetMaxPermissibleCvssV3Score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity">ResetMaxPermissibleSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy">ResetUpgradePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetMaxPermissibleCvssV2Score` <a name="ResetMaxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score"></a>

```csharp
private void ResetMaxPermissibleCvssV2Score()
```

##### `ResetMaxPermissibleCvssV3Score` <a name="ResetMaxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score"></a>

```csharp
private void ResetMaxPermissibleCvssV3Score()
```

##### `ResetMaxPermissibleSeverity` <a name="ResetMaxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity"></a>

```csharp
private void ResetMaxPermissibleSeverity()
```

##### `ResetUpgradePolicy` <a name="ResetUpgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy"></a>

```csharp
private void ResetUpgradePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput">MaxPermissibleCvssV2ScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput">MaxPermissibleCvssV3ScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput">MaxPermissibleSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput">UpgradePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score">MaxPermissibleCvssV2Score</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score">MaxPermissibleCvssV3Score</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity">MaxPermissibleSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy">UpgradePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `MaxPermissibleCvssV2ScoreInput`<sup>Optional</sup> <a name="MaxPermissibleCvssV2ScoreInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput"></a>

```csharp
public double MaxPermissibleCvssV2ScoreInput { get; }
```

- *Type:* double

---

##### `MaxPermissibleCvssV3ScoreInput`<sup>Optional</sup> <a name="MaxPermissibleCvssV3ScoreInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput"></a>

```csharp
public double MaxPermissibleCvssV3ScoreInput { get; }
```

- *Type:* double

---

##### `MaxPermissibleSeverityInput`<sup>Optional</sup> <a name="MaxPermissibleSeverityInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput"></a>

```csharp
public string MaxPermissibleSeverityInput { get; }
```

- *Type:* string

---

##### `UpgradePolicyInput`<sup>Optional</sup> <a name="UpgradePolicyInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput"></a>

```csharp
public string UpgradePolicyInput { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `MaxPermissibleCvssV2Score`<sup>Required</sup> <a name="MaxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score"></a>

```csharp
public double MaxPermissibleCvssV2Score { get; }
```

- *Type:* double

---

##### `MaxPermissibleCvssV3Score`<sup>Required</sup> <a name="MaxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score"></a>

```csharp
public double MaxPermissibleCvssV3Score { get; }
```

- *Type:* double

---

##### `MaxPermissibleSeverity`<sup>Required</sup> <a name="MaxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity"></a>

```csharp
public string MaxPermissibleSeverity { get; }
```

- *Type:* string

---

##### `UpgradePolicy`<sup>Required</sup> <a name="UpgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy"></a>

```csharp
public string UpgradePolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue"></a>

```csharp
public AdmRemediationRecipeDetectConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---


### AdmRemediationRecipeNetworkConfigurationOutputReference <a name="AdmRemediationRecipeNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public AdmRemediationRecipeNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---


### AdmRemediationRecipeScmConfigurationOutputReference <a name="AdmRemediationRecipeScmConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeScmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation">ResetBuildFileLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType">ResetExternalScmType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId">ResetOciCodeRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId">ResetPatSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildFileLocation` <a name="ResetBuildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation"></a>

```csharp
private void ResetBuildFileLocation()
```

##### `ResetExternalScmType` <a name="ResetExternalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType"></a>

```csharp
private void ResetExternalScmType()
```

##### `ResetOciCodeRepositoryId` <a name="ResetOciCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId"></a>

```csharp
private void ResetOciCodeRepositoryId()
```

##### `ResetPatSecretId` <a name="ResetPatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId"></a>

```csharp
private void ResetPatSecretId()
```

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl"></a>

```csharp
private void ResetRepositoryUrl()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput">BuildFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput">ExternalScmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput">IsAutomergeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput">OciCodeRepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput">PatSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput">ScmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation">BuildFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType">ExternalScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled">IsAutomergeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId">OciCodeRepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId">PatSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType">ScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `BuildFileLocationInput`<sup>Optional</sup> <a name="BuildFileLocationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput"></a>

```csharp
public string BuildFileLocationInput { get; }
```

- *Type:* string

---

##### `ExternalScmTypeInput`<sup>Optional</sup> <a name="ExternalScmTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput"></a>

```csharp
public string ExternalScmTypeInput { get; }
```

- *Type:* string

---

##### `IsAutomergeEnabledInput`<sup>Optional</sup> <a name="IsAutomergeEnabledInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput"></a>

```csharp
public object IsAutomergeEnabledInput { get; }
```

- *Type:* object

---

##### `OciCodeRepositoryIdInput`<sup>Optional</sup> <a name="OciCodeRepositoryIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput"></a>

```csharp
public string OciCodeRepositoryIdInput { get; }
```

- *Type:* string

---

##### `PatSecretIdInput`<sup>Optional</sup> <a name="PatSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput"></a>

```csharp
public string PatSecretIdInput { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `ScmTypeInput`<sup>Optional</sup> <a name="ScmTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput"></a>

```csharp
public string ScmTypeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `BuildFileLocation`<sup>Required</sup> <a name="BuildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation"></a>

```csharp
public string BuildFileLocation { get; }
```

- *Type:* string

---

##### `ExternalScmType`<sup>Required</sup> <a name="ExternalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType"></a>

```csharp
public string ExternalScmType { get; }
```

- *Type:* string

---

##### `IsAutomergeEnabled`<sup>Required</sup> <a name="IsAutomergeEnabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled"></a>

```csharp
public object IsAutomergeEnabled { get; }
```

- *Type:* object

---

##### `OciCodeRepositoryId`<sup>Required</sup> <a name="OciCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId"></a>

```csharp
public string OciCodeRepositoryId { get; }
```

- *Type:* string

---

##### `PatSecretId`<sup>Required</sup> <a name="PatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId"></a>

```csharp
public string PatSecretId { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType"></a>

```csharp
public string ScmType { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue"></a>

```csharp
public AdmRemediationRecipeScmConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---


### AdmRemediationRecipeTimeoutsOutputReference <a name="AdmRemediationRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AdmRemediationRecipeVerifyConfigurationOutputReference <a name="AdmRemediationRecipeVerifyConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AdmRemediationRecipeVerifyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters">ResetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl">ResetJenkinsUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId">ResetPatSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId">ResetPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId">ResetTriggerSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalParameters` <a name="ResetAdditionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters"></a>

```csharp
private void ResetAdditionalParameters()
```

##### `ResetJenkinsUrl` <a name="ResetJenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl"></a>

```csharp
private void ResetJenkinsUrl()
```

##### `ResetJobName` <a name="ResetJobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName"></a>

```csharp
private void ResetJobName()
```

##### `ResetPatSecretId` <a name="ResetPatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId"></a>

```csharp
private void ResetPatSecretId()
```

##### `ResetPipelineId` <a name="ResetPipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId"></a>

```csharp
private void ResetPipelineId()
```

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl"></a>

```csharp
private void ResetRepositoryUrl()
```

##### `ResetTriggerSecretId` <a name="ResetTriggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId"></a>

```csharp
private void ResetTriggerSecretId()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName"></a>

```csharp
private void ResetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput">AdditionalParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput">BuildServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput">JenkinsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput">PatSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput">PipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput">TriggerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput">WorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters">AdditionalParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType">BuildServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl">JenkinsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId">PatSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId">TriggerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalParametersInput`<sup>Optional</sup> <a name="AdditionalParametersInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuildServiceTypeInput`<sup>Optional</sup> <a name="BuildServiceTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput"></a>

```csharp
public string BuildServiceTypeInput { get; }
```

- *Type:* string

---

##### `JenkinsUrlInput`<sup>Optional</sup> <a name="JenkinsUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput"></a>

```csharp
public string JenkinsUrlInput { get; }
```

- *Type:* string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `PatSecretIdInput`<sup>Optional</sup> <a name="PatSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput"></a>

```csharp
public string PatSecretIdInput { get; }
```

- *Type:* string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput"></a>

```csharp
public string PipelineIdInput { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `TriggerSecretIdInput`<sup>Optional</sup> <a name="TriggerSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput"></a>

```csharp
public string TriggerSecretIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput"></a>

```csharp
public string WorkflowNameInput { get; }
```

- *Type:* string

---

##### `AdditionalParameters`<sup>Required</sup> <a name="AdditionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuildServiceType`<sup>Required</sup> <a name="BuildServiceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType"></a>

```csharp
public string BuildServiceType { get; }
```

- *Type:* string

---

##### `JenkinsUrl`<sup>Required</sup> <a name="JenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl"></a>

```csharp
public string JenkinsUrl { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `PatSecretId`<sup>Required</sup> <a name="PatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId"></a>

```csharp
public string PatSecretId { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `TriggerSecretId`<sup>Required</sup> <a name="TriggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId"></a>

```csharp
public string TriggerSecretId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue"></a>

```csharp
public AdmRemediationRecipeVerifyConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---



