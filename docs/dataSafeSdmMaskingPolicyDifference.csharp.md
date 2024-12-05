# `dataSafeSdmMaskingPolicyDifference` Submodule <a name="`dataSafeSdmMaskingPolicyDifference` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSdmMaskingPolicyDifference <a name="DataSafeSdmMaskingPolicyDifference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference oci_data_safe_sdm_masking_policy_difference}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSdmMaskingPolicyDifference(Construct Scope, string Id, DataSafeSdmMaskingPolicyDifferenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig">DataSafeSdmMaskingPolicyDifferenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig">DataSafeSdmMaskingPolicyDifferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType">ResetDifferenceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeSdmMaskingPolicyDifferenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDifferenceType` <a name="ResetDifferenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType"></a>

```csharp
private void ResetDifferenceType()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSdmMaskingPolicyDifference.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSdmMaskingPolicyDifference.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSdmMaskingPolicyDifference.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSdmMaskingPolicyDifference.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSdmMaskingPolicyDifference to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSdmMaskingPolicyDifference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSdmMaskingPolicyDifference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted">TimeCreationStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput">DifferenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType">DifferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeCreationStarted`<sup>Required</sup> <a name="TimeCreationStarted" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted"></a>

```csharp
public string TimeCreationStarted { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts"></a>

```csharp
public DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DifferenceTypeInput`<sup>Optional</sup> <a name="DifferenceTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput"></a>

```csharp
public string DifferenceTypeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput"></a>

```csharp
public string MaskingPolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DifferenceType`<sup>Required</sup> <a name="DifferenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType"></a>

```csharp
public string DifferenceType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSdmMaskingPolicyDifferenceConfig <a name="DataSafeSdmMaskingPolicyDifferenceConfig" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSdmMaskingPolicyDifferenceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string MaskingPolicyId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DifferenceType = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DataSafeSdmMaskingPolicyDifferenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType">DifferenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}.

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}.

---

##### `DifferenceType`<sup>Optional</sup> <a name="DifferenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType"></a>

```csharp
public string DifferenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts"></a>

```csharp
public DataSafeSdmMaskingPolicyDifferenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#timeouts DataSafeSdmMaskingPolicyDifference#timeouts}

---

### DataSafeSdmMaskingPolicyDifferenceTimeouts <a name="DataSafeSdmMaskingPolicyDifferenceTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSdmMaskingPolicyDifferenceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference <a name="DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



