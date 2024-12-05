# `dataSafeLibraryMaskingFormat` Submodule <a name="`dataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeLibraryMaskingFormat <a name="DataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeLibraryMaskingFormat(Construct Scope, string Id, DataSafeLibraryMaskingFormatConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig">DataSafeLibraryMaskingFormatConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig">DataSafeLibraryMaskingFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries">PutFormatEntries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds">ResetSensitiveTypeIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFormatEntries` <a name="PutFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries"></a>

```csharp
private void PutFormatEntries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeLibraryMaskingFormatTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSensitiveTypeIds` <a name="ResetSensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds"></a>

```csharp
private void ResetSensitiveTypeIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeLibraryMaskingFormat.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeLibraryMaskingFormat.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeLibraryMaskingFormat.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeLibraryMaskingFormat.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeLibraryMaskingFormat to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries">FormatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput">FormatEntriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput">SensitiveTypeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds">SensitiveTypeIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries"></a>

```csharp
public DataSafeLibraryMaskingFormatFormatEntriesList FormatEntries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts"></a>

```csharp
public DataSafeLibraryMaskingFormatTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FormatEntriesInput`<sup>Optional</sup> <a name="FormatEntriesInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput"></a>

```csharp
public object FormatEntriesInput { get; }
```

- *Type:* object

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SensitiveTypeIdsInput`<sup>Optional</sup> <a name="SensitiveTypeIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput"></a>

```csharp
public string[] SensitiveTypeIdsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SensitiveTypeIds`<sup>Required</sup> <a name="SensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```csharp
public string[] SensitiveTypeIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeLibraryMaskingFormatConfig <a name="DataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeLibraryMaskingFormatConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object FormatEntries,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string[] SensitiveTypeIds = null,
    DataSafeLibraryMaskingFormatTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries">FormatEntries</a></code> | <code>object</code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds">SensitiveTypeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}.

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries"></a>

```csharp
public object FormatEntries { get; set; }
```

- *Type:* object

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#format_entries DataSafeLibraryMaskingFormat#format_entries}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SensitiveTypeIds`<sup>Optional</sup> <a name="SensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds"></a>

```csharp
public string[] SensitiveTypeIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts"></a>

```csharp
public DataSafeLibraryMaskingFormatTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#timeouts DataSafeLibraryMaskingFormat#timeouts}

---

### DataSafeLibraryMaskingFormatFormatEntries <a name="DataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeLibraryMaskingFormatFormatEntries {
    string Type,
    string ColumnName = null,
    string Description = null,
    string EndDate = null,
    double EndLength = null,
    double EndValue = null,
    double FixedNumber = null,
    string FixedString = null,
    string[] GroupingColumns = null,
    double Length = null,
    string LibraryMaskingFormatId = null,
    string Pattern = null,
    string PostProcessingFunction = null,
    string[] RandomList = null,
    string RegularExpression = null,
    string ReplaceWith = null,
    string SchemaName = null,
    string SqlExpression = null,
    string StartDate = null,
    double StartLength = null,
    double StartPosition = null,
    double StartValue = null,
    string TableName = null,
    string UserDefinedFunction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength">EndLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue">EndValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber">FixedNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString">FixedString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns">GroupingColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length">Length</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList">RandomList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression">RegularExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith">ReplaceWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate">StartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength">StartLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition">StartPosition</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue">StartValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}.

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}.

---

##### `EndLength`<sup>Optional</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength"></a>

```csharp
public double EndLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}.

---

##### `EndValue`<sup>Optional</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue"></a>

```csharp
public double EndValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}.

---

##### `FixedNumber`<sup>Optional</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber"></a>

```csharp
public double FixedNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}.

---

##### `FixedString`<sup>Optional</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString"></a>

```csharp
public string FixedString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}.

---

##### `GroupingColumns`<sup>Optional</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns"></a>

```csharp
public string[] GroupingColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}.

---

##### `Length`<sup>Optional</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length"></a>

```csharp
public double Length { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}.

---

##### `LibraryMaskingFormatId`<sup>Optional</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId"></a>

```csharp
public string LibraryMaskingFormatId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}.

---

##### `PostProcessingFunction`<sup>Optional</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction"></a>

```csharp
public string PostProcessingFunction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}.

---

##### `RandomList`<sup>Optional</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList"></a>

```csharp
public string[] RandomList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}.

---

##### `RegularExpression`<sup>Optional</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression"></a>

```csharp
public string RegularExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}.

---

##### `ReplaceWith`<sup>Optional</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith"></a>

```csharp
public string ReplaceWith { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}.

---

##### `SqlExpression`<sup>Optional</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}.

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}.

---

##### `StartLength`<sup>Optional</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength"></a>

```csharp
public double StartLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}.

---

##### `StartPosition`<sup>Optional</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition"></a>

```csharp
public double StartPosition { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}.

---

##### `StartValue`<sup>Optional</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue"></a>

```csharp
public double StartValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}.

---

##### `UserDefinedFunction`<sup>Optional</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction"></a>

```csharp
public string UserDefinedFunction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}.

---

### DataSafeLibraryMaskingFormatTimeouts <a name="DataSafeLibraryMaskingFormatTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeLibraryMaskingFormatTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeLibraryMaskingFormatFormatEntriesList <a name="DataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeLibraryMaskingFormatFormatEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```csharp
private DataSafeLibraryMaskingFormatFormatEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeLibraryMaskingFormatFormatEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength">ResetEndLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue">ResetEndValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber">ResetFixedNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString">ResetFixedString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns">ResetGroupingColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId">ResetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction">ResetPostProcessingFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList">ResetRandomList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression">ResetRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith">ResetReplaceWith</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression">ResetSqlExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength">ResetStartLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition">ResetStartPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue">ResetStartValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction">ResetUserDefinedFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName"></a>

```csharp
private void ResetColumnName()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEndDate` <a name="ResetEndDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetEndLength` <a name="ResetEndLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength"></a>

```csharp
private void ResetEndLength()
```

##### `ResetEndValue` <a name="ResetEndValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue"></a>

```csharp
private void ResetEndValue()
```

##### `ResetFixedNumber` <a name="ResetFixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber"></a>

```csharp
private void ResetFixedNumber()
```

##### `ResetFixedString` <a name="ResetFixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString"></a>

```csharp
private void ResetFixedString()
```

##### `ResetGroupingColumns` <a name="ResetGroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns"></a>

```csharp
private void ResetGroupingColumns()
```

##### `ResetLength` <a name="ResetLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength"></a>

```csharp
private void ResetLength()
```

##### `ResetLibraryMaskingFormatId` <a name="ResetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId"></a>

```csharp
private void ResetLibraryMaskingFormatId()
```

##### `ResetPattern` <a name="ResetPattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetPostProcessingFunction` <a name="ResetPostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction"></a>

```csharp
private void ResetPostProcessingFunction()
```

##### `ResetRandomList` <a name="ResetRandomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList"></a>

```csharp
private void ResetRandomList()
```

##### `ResetRegularExpression` <a name="ResetRegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression"></a>

```csharp
private void ResetRegularExpression()
```

##### `ResetReplaceWith` <a name="ResetReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith"></a>

```csharp
private void ResetReplaceWith()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetSqlExpression` <a name="ResetSqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression"></a>

```csharp
private void ResetSqlExpression()
```

##### `ResetStartDate` <a name="ResetStartDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetStartLength` <a name="ResetStartLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength"></a>

```csharp
private void ResetStartLength()
```

##### `ResetStartPosition` <a name="ResetStartPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition"></a>

```csharp
private void ResetStartPosition()
```

##### `ResetStartValue` <a name="ResetStartValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue"></a>

```csharp
private void ResetStartValue()
```

##### `ResetTableName` <a name="ResetTableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetUserDefinedFunction` <a name="ResetUserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction"></a>

```csharp
private void ResetUserDefinedFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput">EndLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput">EndValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput">FixedNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput">FixedStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput">GroupingColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput">LengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput">LibraryMaskingFormatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput">PostProcessingFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput">RandomListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput">RegularExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput">ReplaceWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput">StartLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput">StartPositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput">StartValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput">UserDefinedFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">EndLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">EndValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">FixedNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">FixedString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">GroupingColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">RandomList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">RegularExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">ReplaceWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">StartLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">StartPosition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">StartValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `EndLengthInput`<sup>Optional</sup> <a name="EndLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput"></a>

```csharp
public double EndLengthInput { get; }
```

- *Type:* double

---

##### `EndValueInput`<sup>Optional</sup> <a name="EndValueInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput"></a>

```csharp
public double EndValueInput { get; }
```

- *Type:* double

---

##### `FixedNumberInput`<sup>Optional</sup> <a name="FixedNumberInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput"></a>

```csharp
public double FixedNumberInput { get; }
```

- *Type:* double

---

##### `FixedStringInput`<sup>Optional</sup> <a name="FixedStringInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput"></a>

```csharp
public string FixedStringInput { get; }
```

- *Type:* string

---

##### `GroupingColumnsInput`<sup>Optional</sup> <a name="GroupingColumnsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput"></a>

```csharp
public string[] GroupingColumnsInput { get; }
```

- *Type:* string[]

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput"></a>

```csharp
public double LengthInput { get; }
```

- *Type:* double

---

##### `LibraryMaskingFormatIdInput`<sup>Optional</sup> <a name="LibraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput"></a>

```csharp
public string LibraryMaskingFormatIdInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PostProcessingFunctionInput`<sup>Optional</sup> <a name="PostProcessingFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput"></a>

```csharp
public string PostProcessingFunctionInput { get; }
```

- *Type:* string

---

##### `RandomListInput`<sup>Optional</sup> <a name="RandomListInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput"></a>

```csharp
public string[] RandomListInput { get; }
```

- *Type:* string[]

---

##### `RegularExpressionInput`<sup>Optional</sup> <a name="RegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput"></a>

```csharp
public string RegularExpressionInput { get; }
```

- *Type:* string

---

##### `ReplaceWithInput`<sup>Optional</sup> <a name="ReplaceWithInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput"></a>

```csharp
public string ReplaceWithInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput"></a>

```csharp
public string SqlExpressionInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `StartLengthInput`<sup>Optional</sup> <a name="StartLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput"></a>

```csharp
public double StartLengthInput { get; }
```

- *Type:* double

---

##### `StartPositionInput`<sup>Optional</sup> <a name="StartPositionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput"></a>

```csharp
public double StartPositionInput { get; }
```

- *Type:* double

---

##### `StartValueInput`<sup>Optional</sup> <a name="StartValueInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput"></a>

```csharp
public double StartValueInput { get; }
```

- *Type:* double

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserDefinedFunctionInput`<sup>Optional</sup> <a name="UserDefinedFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput"></a>

```csharp
public string UserDefinedFunctionInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `EndLength`<sup>Required</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```csharp
public double EndLength { get; }
```

- *Type:* double

---

##### `EndValue`<sup>Required</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```csharp
public double EndValue { get; }
```

- *Type:* double

---

##### `FixedNumber`<sup>Required</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```csharp
public double FixedNumber { get; }
```

- *Type:* double

---

##### `FixedString`<sup>Required</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```csharp
public string FixedString { get; }
```

- *Type:* string

---

##### `GroupingColumns`<sup>Required</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```csharp
public string[] GroupingColumns { get; }
```

- *Type:* string[]

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```csharp
public string LibraryMaskingFormatId { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PostProcessingFunction`<sup>Required</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```csharp
public string PostProcessingFunction { get; }
```

- *Type:* string

---

##### `RandomList`<sup>Required</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```csharp
public string[] RandomList { get; }
```

- *Type:* string[]

---

##### `RegularExpression`<sup>Required</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```csharp
public string RegularExpression { get; }
```

- *Type:* string

---

##### `ReplaceWith`<sup>Required</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```csharp
public string ReplaceWith { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `StartLength`<sup>Required</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```csharp
public double StartLength { get; }
```

- *Type:* double

---

##### `StartPosition`<sup>Required</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```csharp
public double StartPosition { get; }
```

- *Type:* double

---

##### `StartValue`<sup>Required</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```csharp
public double StartValue { get; }
```

- *Type:* double

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserDefinedFunction`<sup>Required</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```csharp
public string UserDefinedFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeLibraryMaskingFormatTimeoutsOutputReference <a name="DataSafeLibraryMaskingFormatTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeLibraryMaskingFormatTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



