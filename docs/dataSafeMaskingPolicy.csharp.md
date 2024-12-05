# `dataSafeMaskingPolicy` Submodule <a name="`dataSafeMaskingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPolicy <a name="DataSafeMaskingPolicy" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy oci_data_safe_masking_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicy(Construct Scope, string Id, DataSafeMaskingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig">DataSafeMaskingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig">DataSafeMaskingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource">PutColumnSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetAddMaskingColumnsFromSdmTrigger">ResetAddMaskingColumnsFromSdmTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetGenerateHealthReportTrigger">ResetGenerateHealthReportTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsDropTempTablesEnabled">ResetIsDropTempTablesEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRedoLoggingEnabled">ResetIsRedoLoggingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRefreshStatsEnabled">ResetIsRefreshStatsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetParallelDegree">ResetParallelDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPostMaskingScript">ResetPostMaskingScript</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPreMaskingScript">ResetPreMaskingScript</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetRecompile">ResetRecompile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumnSource` <a name="PutColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource"></a>

```csharp
private void PutColumnSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeMaskingPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

---

##### `ResetAddMaskingColumnsFromSdmTrigger` <a name="ResetAddMaskingColumnsFromSdmTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetAddMaskingColumnsFromSdmTrigger"></a>

```csharp
private void ResetAddMaskingColumnsFromSdmTrigger()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetGenerateHealthReportTrigger` <a name="ResetGenerateHealthReportTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetGenerateHealthReportTrigger"></a>

```csharp
private void ResetGenerateHealthReportTrigger()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDropTempTablesEnabled` <a name="ResetIsDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsDropTempTablesEnabled"></a>

```csharp
private void ResetIsDropTempTablesEnabled()
```

##### `ResetIsRedoLoggingEnabled` <a name="ResetIsRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRedoLoggingEnabled"></a>

```csharp
private void ResetIsRedoLoggingEnabled()
```

##### `ResetIsRefreshStatsEnabled` <a name="ResetIsRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRefreshStatsEnabled"></a>

```csharp
private void ResetIsRefreshStatsEnabled()
```

##### `ResetParallelDegree` <a name="ResetParallelDegree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetParallelDegree"></a>

```csharp
private void ResetParallelDegree()
```

##### `ResetPostMaskingScript` <a name="ResetPostMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPostMaskingScript"></a>

```csharp
private void ResetPostMaskingScript()
```

##### `ResetPreMaskingScript` <a name="ResetPreMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPreMaskingScript"></a>

```csharp
private void ResetPreMaskingScript()
```

##### `ResetRecompile` <a name="ResetRecompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetRecompile"></a>

```csharp
private void ResetRecompile()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeMaskingPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeMaskingPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeMaskingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSource">ColumnSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList">DataSafeMaskingPolicyColumnSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference">DataSafeMaskingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTriggerInput">AddMaskingColumnsFromSdmTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSourceInput">ColumnSourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTriggerInput">GenerateHealthReportTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabledInput">IsDropTempTablesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabledInput">IsRedoLoggingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabledInput">IsRefreshStatsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegreeInput">ParallelDegreeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScriptInput">PostMaskingScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScriptInput">PreMaskingScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompileInput">RecompileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTrigger">AddMaskingColumnsFromSdmTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTrigger">GenerateHealthReportTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabled">IsDropTempTablesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabled">IsRedoLoggingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabled">IsRefreshStatsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegree">ParallelDegree</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScript">PostMaskingScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScript">PreMaskingScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompile">Recompile</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ColumnSource`<sup>Required</sup> <a name="ColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSource"></a>

```csharp
public DataSafeMaskingPolicyColumnSourceList ColumnSource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList">DataSafeMaskingPolicyColumnSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeouts"></a>

```csharp
public DataSafeMaskingPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference">DataSafeMaskingPolicyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AddMaskingColumnsFromSdmTriggerInput`<sup>Optional</sup> <a name="AddMaskingColumnsFromSdmTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTriggerInput"></a>

```csharp
public double AddMaskingColumnsFromSdmTriggerInput { get; }
```

- *Type:* double

---

##### `ColumnSourceInput`<sup>Optional</sup> <a name="ColumnSourceInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSourceInput"></a>

```csharp
public object ColumnSourceInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateHealthReportTriggerInput`<sup>Optional</sup> <a name="GenerateHealthReportTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTriggerInput"></a>

```csharp
public double GenerateHealthReportTriggerInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDropTempTablesEnabledInput`<sup>Optional</sup> <a name="IsDropTempTablesEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabledInput"></a>

```csharp
public object IsDropTempTablesEnabledInput { get; }
```

- *Type:* object

---

##### `IsRedoLoggingEnabledInput`<sup>Optional</sup> <a name="IsRedoLoggingEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabledInput"></a>

```csharp
public object IsRedoLoggingEnabledInput { get; }
```

- *Type:* object

---

##### `IsRefreshStatsEnabledInput`<sup>Optional</sup> <a name="IsRefreshStatsEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabledInput"></a>

```csharp
public object IsRefreshStatsEnabledInput { get; }
```

- *Type:* object

---

##### `ParallelDegreeInput`<sup>Optional</sup> <a name="ParallelDegreeInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegreeInput"></a>

```csharp
public string ParallelDegreeInput { get; }
```

- *Type:* string

---

##### `PostMaskingScriptInput`<sup>Optional</sup> <a name="PostMaskingScriptInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScriptInput"></a>

```csharp
public string PostMaskingScriptInput { get; }
```

- *Type:* string

---

##### `PreMaskingScriptInput`<sup>Optional</sup> <a name="PreMaskingScriptInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScriptInput"></a>

```csharp
public string PreMaskingScriptInput { get; }
```

- *Type:* string

---

##### `RecompileInput`<sup>Optional</sup> <a name="RecompileInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompileInput"></a>

```csharp
public string RecompileInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AddMaskingColumnsFromSdmTrigger`<sup>Required</sup> <a name="AddMaskingColumnsFromSdmTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTrigger"></a>

```csharp
public double AddMaskingColumnsFromSdmTrigger { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateHealthReportTrigger`<sup>Required</sup> <a name="GenerateHealthReportTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTrigger"></a>

```csharp
public double GenerateHealthReportTrigger { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDropTempTablesEnabled`<sup>Required</sup> <a name="IsDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabled"></a>

```csharp
public object IsDropTempTablesEnabled { get; }
```

- *Type:* object

---

##### `IsRedoLoggingEnabled`<sup>Required</sup> <a name="IsRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabled"></a>

```csharp
public object IsRedoLoggingEnabled { get; }
```

- *Type:* object

---

##### `IsRefreshStatsEnabled`<sup>Required</sup> <a name="IsRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabled"></a>

```csharp
public object IsRefreshStatsEnabled { get; }
```

- *Type:* object

---

##### `ParallelDegree`<sup>Required</sup> <a name="ParallelDegree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegree"></a>

```csharp
public string ParallelDegree { get; }
```

- *Type:* string

---

##### `PostMaskingScript`<sup>Required</sup> <a name="PostMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScript"></a>

```csharp
public string PostMaskingScript { get; }
```

- *Type:* string

---

##### `PreMaskingScript`<sup>Required</sup> <a name="PreMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScript"></a>

```csharp
public string PreMaskingScript { get; }
```

- *Type:* string

---

##### `Recompile`<sup>Required</sup> <a name="Recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompile"></a>

```csharp
public string Recompile { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPolicyColumnSource <a name="DataSafeMaskingPolicyColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyColumnSource {
    string ColumnSource,
    string SensitiveDataModelId = null,
    string TargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.columnSource">ColumnSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#sensitive_data_model_id DataSafeMaskingPolicy#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#target_id DataSafeMaskingPolicy#target_id}. |

---

##### `ColumnSource`<sup>Required</sup> <a name="ColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.columnSource"></a>

```csharp
public string ColumnSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}.

---

##### `SensitiveDataModelId`<sup>Optional</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#sensitive_data_model_id DataSafeMaskingPolicy#sensitive_data_model_id}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#target_id DataSafeMaskingPolicy#target_id}.

---

### DataSafeMaskingPolicyConfig <a name="DataSafeMaskingPolicyConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ColumnSource,
    string CompartmentId,
    double AddMaskingColumnsFromSdmTrigger = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    double GenerateHealthReportTrigger = null,
    string Id = null,
    object IsDropTempTablesEnabled = null,
    object IsRedoLoggingEnabled = null,
    object IsRefreshStatsEnabled = null,
    string ParallelDegree = null,
    string PostMaskingScript = null,
    string PreMaskingScript = null,
    string Recompile = null,
    DataSafeMaskingPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.columnSource">ColumnSource</a></code> | <code>object</code> | column_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.addMaskingColumnsFromSdmTrigger">AddMaskingColumnsFromSdmTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.generateHealthReportTrigger">GenerateHealthReportTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isDropTempTablesEnabled">IsDropTempTablesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRedoLoggingEnabled">IsRedoLoggingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRefreshStatsEnabled">IsRefreshStatsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.parallelDegree">ParallelDegree</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.postMaskingScript">PostMaskingScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.preMaskingScript">PreMaskingScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.recompile">Recompile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ColumnSource`<sup>Required</sup> <a name="ColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.columnSource"></a>

```csharp
public object ColumnSource { get; set; }
```

- *Type:* object

column_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}.

---

##### `AddMaskingColumnsFromSdmTrigger`<sup>Optional</sup> <a name="AddMaskingColumnsFromSdmTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.addMaskingColumnsFromSdmTrigger"></a>

```csharp
public double AddMaskingColumnsFromSdmTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}.

---

##### `GenerateHealthReportTrigger`<sup>Optional</sup> <a name="GenerateHealthReportTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.generateHealthReportTrigger"></a>

```csharp
public double GenerateHealthReportTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDropTempTablesEnabled`<sup>Optional</sup> <a name="IsDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isDropTempTablesEnabled"></a>

```csharp
public object IsDropTempTablesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}.

---

##### `IsRedoLoggingEnabled`<sup>Optional</sup> <a name="IsRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRedoLoggingEnabled"></a>

```csharp
public object IsRedoLoggingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}.

---

##### `IsRefreshStatsEnabled`<sup>Optional</sup> <a name="IsRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRefreshStatsEnabled"></a>

```csharp
public object IsRefreshStatsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}.

---

##### `ParallelDegree`<sup>Optional</sup> <a name="ParallelDegree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.parallelDegree"></a>

```csharp
public string ParallelDegree { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}.

---

##### `PostMaskingScript`<sup>Optional</sup> <a name="PostMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.postMaskingScript"></a>

```csharp
public string PostMaskingScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}.

---

##### `PreMaskingScript`<sup>Optional</sup> <a name="PreMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.preMaskingScript"></a>

```csharp
public string PreMaskingScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}.

---

##### `Recompile`<sup>Optional</sup> <a name="Recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.recompile"></a>

```csharp
public string Recompile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.timeouts"></a>

```csharp
public DataSafeMaskingPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#timeouts DataSafeMaskingPolicy#timeouts}

---

### DataSafeMaskingPolicyTimeouts <a name="DataSafeMaskingPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#create DataSafeMaskingPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#delete DataSafeMaskingPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#update DataSafeMaskingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#create DataSafeMaskingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#delete DataSafeMaskingPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#update DataSafeMaskingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPolicyColumnSourceList <a name="DataSafeMaskingPolicyColumnSourceList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyColumnSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get"></a>

```csharp
private DataSafeMaskingPolicyColumnSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeMaskingPolicyColumnSourceOutputReference <a name="DataSafeMaskingPolicyColumnSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyColumnSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetSensitiveDataModelId">ResetSensitiveDataModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSensitiveDataModelId` <a name="ResetSensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetSensitiveDataModelId"></a>

```csharp
private void ResetSensitiveDataModelId()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetTargetId"></a>

```csharp
private void ResetTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSourceInput">ColumnSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSource">ColumnSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnSourceInput`<sup>Optional</sup> <a name="ColumnSourceInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSourceInput"></a>

```csharp
public string ColumnSourceInput { get; }
```

- *Type:* string

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelIdInput"></a>

```csharp
public string SensitiveDataModelIdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `ColumnSource`<sup>Required</sup> <a name="ColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSource"></a>

```csharp
public string ColumnSource { get; }
```

- *Type:* string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeMaskingPolicyTimeoutsOutputReference <a name="DataSafeMaskingPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeMaskingPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



