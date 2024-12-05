# `aiAnomalyDetectionDataAsset` Submodule <a name="`aiAnomalyDetectionDataAsset` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDataAsset <a name="AiAnomalyDetectionDataAsset" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDataAsset(Construct Scope, string Id, AiAnomalyDetectionDataAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig">AiAnomalyDetectionDataAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig">AiAnomalyDetectionDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails">PutDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId">ResetPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataSourceDetails` <a name="PutDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails"></a>

```csharp
private void PutDataSourceDetails(AiAnomalyDetectionDataAssetDataSourceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts"></a>

```csharp
private void PutTimeouts(AiAnomalyDetectionDataAssetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateEndpointId` <a name="ResetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId"></a>

```csharp
private void ResetPrivateEndpointId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiAnomalyDetectionDataAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiAnomalyDetectionDataAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiAnomalyDetectionDataAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AiAnomalyDetectionDataAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiAnomalyDetectionDataAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiAnomalyDetectionDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails">DataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput">DataSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataSourceDetails`<sup>Required</sup> <a name="DataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails"></a>

```csharp
public AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference DataSourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts"></a>

```csharp
public AiAnomalyDetectionDataAssetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DataSourceDetailsInput`<sup>Optional</sup> <a name="DataSourceDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput"></a>

```csharp
public AiAnomalyDetectionDataAssetDataSourceDetails DataSourceDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput"></a>

```csharp
public string PrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDataAssetConfig <a name="AiAnomalyDetectionDataAssetConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDataAssetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    AiAnomalyDetectionDataAssetDataSourceDetails DataSourceDetails,
    string ProjectId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string PrivateEndpointId = null,
    AiAnomalyDetectionDataAssetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails">DataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId">PrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}.

---

##### `DataSourceDetails`<sup>Required</sup> <a name="DataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails"></a>

```csharp
public AiAnomalyDetectionDataAssetDataSourceDetails DataSourceDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_details AiAnomalyDetectionDataAsset#data_source_details}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateEndpointId`<sup>Optional</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId"></a>

```csharp
public string PrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts"></a>

```csharp
public AiAnomalyDetectionDataAssetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#timeouts AiAnomalyDetectionDataAsset#timeouts}

---

### AiAnomalyDetectionDataAssetDataSourceDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDataAssetDataSourceDetails {
    string DataSourceType,
    string AtpPasswordSecretId = null,
    string AtpUserName = null,
    string Bucket = null,
    string CwalletFileSecretId = null,
    string DatabaseName = null,
    string EwalletFileSecretId = null,
    string KeyStoreFileSecretId = null,
    string MeasurementName = null,
    string Namespace = null,
    string Object = null,
    string OjdbcFileSecretId = null,
    string PasswordSecretId = null,
    string TableName = null,
    string TnsnamesFileSecretId = null,
    string TruststoreFileSecretId = null,
    string Url = null,
    string UserName = null,
    AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails VersionSpecificDetails = null,
    string WalletPasswordSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType">DataSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId">AtpPasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName">AtpUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId">CwalletFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId">EwalletFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId">KeyStoreFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName">MeasurementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId">OjdbcFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId">TnsnamesFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId">TruststoreFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails">VersionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | version_specific_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId">WalletPasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}. |

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType"></a>

```csharp
public string DataSourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}.

---

##### `AtpPasswordSecretId`<sup>Optional</sup> <a name="AtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId"></a>

```csharp
public string AtpPasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}.

---

##### `AtpUserName`<sup>Optional</sup> <a name="AtpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName"></a>

```csharp
public string AtpUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `CwalletFileSecretId`<sup>Optional</sup> <a name="CwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId"></a>

```csharp
public string CwalletFileSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `EwalletFileSecretId`<sup>Optional</sup> <a name="EwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId"></a>

```csharp
public string EwalletFileSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}.

---

##### `KeyStoreFileSecretId`<sup>Optional</sup> <a name="KeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId"></a>

```csharp
public string KeyStoreFileSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}.

---

##### `MeasurementName`<sup>Optional</sup> <a name="MeasurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName"></a>

```csharp
public string MeasurementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}.

---

##### `OjdbcFileSecretId`<sup>Optional</sup> <a name="OjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId"></a>

```csharp
public string OjdbcFileSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}.

---

##### `TnsnamesFileSecretId`<sup>Optional</sup> <a name="TnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId"></a>

```csharp
public string TnsnamesFileSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}.

---

##### `TruststoreFileSecretId`<sup>Optional</sup> <a name="TruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId"></a>

```csharp
public string TruststoreFileSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}.

---

##### `VersionSpecificDetails`<sup>Optional</sup> <a name="VersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails"></a>

```csharp
public AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails VersionSpecificDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

version_specific_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#version_specific_details AiAnomalyDetectionDataAsset#version_specific_details}

---

##### `WalletPasswordSecretId`<sup>Optional</sup> <a name="WalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId"></a>

```csharp
public string WalletPasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}.

---

### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails {
    string InfluxVersion,
    string Bucket = null,
    string DatabaseName = null,
    string OrganizationName = null,
    string RetentionPolicyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion">InfluxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName">OrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName">RetentionPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}. |

---

##### `InfluxVersion`<sup>Required</sup> <a name="InfluxVersion" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion"></a>

```csharp
public string InfluxVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName"></a>

```csharp
public string OrganizationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}.

---

##### `RetentionPolicyName`<sup>Optional</sup> <a name="RetentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName"></a>

```csharp
public string RetentionPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}.

---

### AiAnomalyDetectionDataAssetTimeouts <a name="AiAnomalyDetectionDataAssetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDataAssetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails">PutVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId">ResetAtpPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName">ResetAtpUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId">ResetCwalletFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId">ResetEwalletFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId">ResetKeyStoreFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName">ResetMeasurementName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId">ResetOjdbcFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId">ResetTnsnamesFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId">ResetTruststoreFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails">ResetVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId">ResetWalletPasswordSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVersionSpecificDetails` <a name="PutVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails"></a>

```csharp
private void PutVersionSpecificDetails(AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `ResetAtpPasswordSecretId` <a name="ResetAtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId"></a>

```csharp
private void ResetAtpPasswordSecretId()
```

##### `ResetAtpUserName` <a name="ResetAtpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName"></a>

```csharp
private void ResetAtpUserName()
```

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetCwalletFileSecretId` <a name="ResetCwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId"></a>

```csharp
private void ResetCwalletFileSecretId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetEwalletFileSecretId` <a name="ResetEwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId"></a>

```csharp
private void ResetEwalletFileSecretId()
```

##### `ResetKeyStoreFileSecretId` <a name="ResetKeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId"></a>

```csharp
private void ResetKeyStoreFileSecretId()
```

##### `ResetMeasurementName` <a name="ResetMeasurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName"></a>

```csharp
private void ResetMeasurementName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```

##### `ResetOjdbcFileSecretId` <a name="ResetOjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId"></a>

```csharp
private void ResetOjdbcFileSecretId()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId"></a>

```csharp
private void ResetPasswordSecretId()
```

##### `ResetTableName` <a name="ResetTableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTnsnamesFileSecretId` <a name="ResetTnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId"></a>

```csharp
private void ResetTnsnamesFileSecretId()
```

##### `ResetTruststoreFileSecretId` <a name="ResetTruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId"></a>

```csharp
private void ResetTruststoreFileSecretId()
```

##### `ResetUrl` <a name="ResetUrl" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```

##### `ResetVersionSpecificDetails` <a name="ResetVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails"></a>

```csharp
private void ResetVersionSpecificDetails()
```

##### `ResetWalletPasswordSecretId` <a name="ResetWalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId"></a>

```csharp
private void ResetWalletPasswordSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails">VersionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput">AtpPasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput">AtpUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput">CwalletFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput">DataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput">EwalletFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput">KeyStoreFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput">MeasurementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput">OjdbcFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput">TnsnamesFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput">TruststoreFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput">VersionSpecificDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput">WalletPasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId">AtpPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName">AtpUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId">CwalletFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType">DataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId">EwalletFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId">KeyStoreFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName">MeasurementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId">OjdbcFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">TnsnamesFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId">TruststoreFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId">WalletPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VersionSpecificDetails`<sup>Required</sup> <a name="VersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```csharp
public AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference VersionSpecificDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a>

---

##### `AtpPasswordSecretIdInput`<sup>Optional</sup> <a name="AtpPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput"></a>

```csharp
public string AtpPasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `AtpUserNameInput`<sup>Optional</sup> <a name="AtpUserNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput"></a>

```csharp
public string AtpUserNameInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CwalletFileSecretIdInput`<sup>Optional</sup> <a name="CwalletFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput"></a>

```csharp
public string CwalletFileSecretIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DataSourceTypeInput`<sup>Optional</sup> <a name="DataSourceTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput"></a>

```csharp
public string DataSourceTypeInput { get; }
```

- *Type:* string

---

##### `EwalletFileSecretIdInput`<sup>Optional</sup> <a name="EwalletFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput"></a>

```csharp
public string EwalletFileSecretIdInput { get; }
```

- *Type:* string

---

##### `KeyStoreFileSecretIdInput`<sup>Optional</sup> <a name="KeyStoreFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput"></a>

```csharp
public string KeyStoreFileSecretIdInput { get; }
```

- *Type:* string

---

##### `MeasurementNameInput`<sup>Optional</sup> <a name="MeasurementNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput"></a>

```csharp
public string MeasurementNameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `OjdbcFileSecretIdInput`<sup>Optional</sup> <a name="OjdbcFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput"></a>

```csharp
public string OjdbcFileSecretIdInput { get; }
```

- *Type:* string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput"></a>

```csharp
public string PasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TnsnamesFileSecretIdInput`<sup>Optional</sup> <a name="TnsnamesFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput"></a>

```csharp
public string TnsnamesFileSecretIdInput { get; }
```

- *Type:* string

---

##### `TruststoreFileSecretIdInput`<sup>Optional</sup> <a name="TruststoreFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput"></a>

```csharp
public string TruststoreFileSecretIdInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `VersionSpecificDetailsInput`<sup>Optional</sup> <a name="VersionSpecificDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput"></a>

```csharp
public AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails VersionSpecificDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `WalletPasswordSecretIdInput`<sup>Optional</sup> <a name="WalletPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput"></a>

```csharp
public string WalletPasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `AtpPasswordSecretId`<sup>Required</sup> <a name="AtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```csharp
public string AtpPasswordSecretId { get; }
```

- *Type:* string

---

##### `AtpUserName`<sup>Required</sup> <a name="AtpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName"></a>

```csharp
public string AtpUserName { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CwalletFileSecretId`<sup>Required</sup> <a name="CwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```csharp
public string CwalletFileSecretId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType"></a>

```csharp
public string DataSourceType { get; }
```

- *Type:* string

---

##### `EwalletFileSecretId`<sup>Required</sup> <a name="EwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```csharp
public string EwalletFileSecretId { get; }
```

- *Type:* string

---

##### `KeyStoreFileSecretId`<sup>Required</sup> <a name="KeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```csharp
public string KeyStoreFileSecretId { get; }
```

- *Type:* string

---

##### `MeasurementName`<sup>Required</sup> <a name="MeasurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName"></a>

```csharp
public string MeasurementName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `OjdbcFileSecretId`<sup>Required</sup> <a name="OjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```csharp
public string OjdbcFileSecretId { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `TnsnamesFileSecretId`<sup>Required</sup> <a name="TnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```csharp
public string TnsnamesFileSecretId { get; }
```

- *Type:* string

---

##### `TruststoreFileSecretId`<sup>Required</sup> <a name="TruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```csharp
public string TruststoreFileSecretId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `WalletPasswordSecretId`<sup>Required</sup> <a name="WalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```csharp
public string WalletPasswordSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public AiAnomalyDetectionDataAssetDataSourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---


### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName">ResetRetentionPolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName"></a>

```csharp
private void ResetOrganizationName()
```

##### `ResetRetentionPolicyName` <a name="ResetRetentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName"></a>

```csharp
private void ResetRetentionPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput">InfluxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput">RetentionPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">InfluxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">RetentionPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `InfluxVersionInput`<sup>Optional</sup> <a name="InfluxVersionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput"></a>

```csharp
public string InfluxVersionInput { get; }
```

- *Type:* string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput"></a>

```csharp
public string OrganizationNameInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyNameInput`<sup>Optional</sup> <a name="RetentionPolicyNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput"></a>

```csharp
public string RetentionPolicyNameInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `InfluxVersion`<sup>Required</sup> <a name="InfluxVersion" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```csharp
public string InfluxVersion { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `RetentionPolicyName`<sup>Required</sup> <a name="RetentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```csharp
public string RetentionPolicyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```csharp
public AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---


### AiAnomalyDetectionDataAssetTimeoutsOutputReference <a name="AiAnomalyDetectionDataAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AiAnomalyDetectionDataAssetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



