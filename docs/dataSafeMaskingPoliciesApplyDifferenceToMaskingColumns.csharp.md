# `dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns` Submodule <a name="`dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns oci_data_safe_masking_policies_apply_difference_to_masking_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns(Construct Scope, string Id, DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceIdInput">SdmMaskingPolicyDifferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceId">SdmMaskingPolicyDifferenceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeouts"></a>

```csharp
public DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyIdInput"></a>

```csharp
public string MaskingPolicyIdInput { get; }
```

- *Type:* string

---

##### `SdmMaskingPolicyDifferenceIdInput`<sup>Optional</sup> <a name="SdmMaskingPolicyDifferenceIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceIdInput"></a>

```csharp
public string SdmMaskingPolicyDifferenceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; }
```

- *Type:* string

---

##### `SdmMaskingPolicyDifferenceId`<sup>Required</sup> <a name="SdmMaskingPolicyDifferenceId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceId"></a>

```csharp
public string SdmMaskingPolicyDifferenceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MaskingPolicyId,
    string SdmMaskingPolicyDifferenceId,
    string Id = null,
    DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.sdmMaskingPolicyDifferenceId">SdmMaskingPolicyDifferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}.

---

##### `SdmMaskingPolicyDifferenceId`<sup>Required</sup> <a name="SdmMaskingPolicyDifferenceId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.sdmMaskingPolicyDifferenceId"></a>

```csharp
public string SdmMaskingPolicyDifferenceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.timeouts"></a>

```csharp
public DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#timeouts DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#timeouts}

---

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#create DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#delete DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#update DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#create DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#delete DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#update DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



