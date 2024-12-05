# `cloudBridgeAsset` Submodule <a name="`cloudBridgeAsset` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAsset <a name="CloudBridgeAsset" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset oci_cloud_bridge_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAsset(Construct Scope, string Id, CloudBridgeAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig">CloudBridgeAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig">CloudBridgeAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute">PutCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm">PutVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter">PutVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm">PutVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds">ResetAssetSourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute">ResetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm">ResetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter">ResetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm">ResetVmwareVm</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompute` <a name="PutCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute"></a>

```csharp
private void PutCompute(CloudBridgeAssetCompute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudBridgeAssetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

---

##### `PutVm` <a name="PutVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm"></a>

```csharp
private void PutVm(CloudBridgeAssetVm Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `PutVmwareVcenter` <a name="PutVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter"></a>

```csharp
private void PutVmwareVcenter(CloudBridgeAssetVmwareVcenter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `PutVmwareVm` <a name="PutVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm"></a>

```csharp
private void PutVmwareVm(CloudBridgeAssetVmwareVm Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `ResetAssetSourceIds` <a name="ResetAssetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds"></a>

```csharp
private void ResetAssetSourceIds()
```

##### `ResetCompute` <a name="ResetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute"></a>

```csharp
private void ResetCompute()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVm` <a name="ResetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm"></a>

```csharp
private void ResetVm()
```

##### `ResetVmwareVcenter` <a name="ResetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter"></a>

```csharp
private void ResetVmwareVcenter()
```

##### `ResetVmwareVm` <a name="ResetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm"></a>

```csharp
private void ResetVmwareVm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudBridgeAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudBridgeAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudBridgeAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CloudBridgeAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudBridgeAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudBridgeAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute">Compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm">Vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter">VmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm">VmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput">AssetSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput">AssetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput">ComputeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput">ExternalAssetKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput">InventoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput">SourceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput">VmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput">VmwareVcenterInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput">VmwareVmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds">AssetSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey">ExternalAssetKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId">InventoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey">SourceKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute"></a>

```csharp
public CloudBridgeAssetComputeOutputReference Compute { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts"></a>

```csharp
public CloudBridgeAssetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Vm`<sup>Required</sup> <a name="Vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm"></a>

```csharp
public CloudBridgeAssetVmOutputReference Vm { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a>

---

##### `VmwareVcenter`<sup>Required</sup> <a name="VmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter"></a>

```csharp
public CloudBridgeAssetVmwareVcenterOutputReference VmwareVcenter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a>

---

##### `VmwareVm`<sup>Required</sup> <a name="VmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm"></a>

```csharp
public CloudBridgeAssetVmwareVmOutputReference VmwareVm { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a>

---

##### `AssetSourceIdsInput`<sup>Optional</sup> <a name="AssetSourceIdsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput"></a>

```csharp
public string[] AssetSourceIdsInput { get; }
```

- *Type:* string[]

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput"></a>

```csharp
public string AssetTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput"></a>

```csharp
public CloudBridgeAssetCompute ComputeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalAssetKeyInput`<sup>Optional</sup> <a name="ExternalAssetKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput"></a>

```csharp
public string ExternalAssetKeyInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InventoryIdInput`<sup>Optional</sup> <a name="InventoryIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput"></a>

```csharp
public string InventoryIdInput { get; }
```

- *Type:* string

---

##### `SourceKeyInput`<sup>Optional</sup> <a name="SourceKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput"></a>

```csharp
public string SourceKeyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmInput`<sup>Optional</sup> <a name="VmInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput"></a>

```csharp
public CloudBridgeAssetVm VmInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `VmwareVcenterInput`<sup>Optional</sup> <a name="VmwareVcenterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput"></a>

```csharp
public CloudBridgeAssetVmwareVcenter VmwareVcenterInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `VmwareVmInput`<sup>Optional</sup> <a name="VmwareVmInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput"></a>

```csharp
public CloudBridgeAssetVmwareVm VmwareVmInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `AssetSourceIds`<sup>Required</sup> <a name="AssetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds"></a>

```csharp
public string[] AssetSourceIds { get; }
```

- *Type:* string[]

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalAssetKey`<sup>Required</sup> <a name="ExternalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey"></a>

```csharp
public string ExternalAssetKey { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InventoryId`<sup>Required</sup> <a name="InventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId"></a>

```csharp
public string InventoryId { get; }
```

- *Type:* string

---

##### `SourceKey`<sup>Required</sup> <a name="SourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey"></a>

```csharp
public string SourceKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAssetCompute <a name="CloudBridgeAssetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetCompute {
    double ConnectedNetworks = null,
    double CoresCount = null,
    string CpuModel = null,
    string Description = null,
    object Disks = null,
    double DisksCount = null,
    string DnsName = null,
    string Firmware = null,
    object GpuDevices = null,
    double GpuDevicesCount = null,
    string GuestState = null,
    string HardwareVersion = null,
    string HostName = null,
    object IsPmemEnabled = null,
    object IsTpmEnabled = null,
    string LatencySensitivity = null,
    string MemoryInMbs = null,
    object Nics = null,
    double NicsCount = null,
    CloudBridgeAssetComputeNvdimmController NvdimmController = null,
    object Nvdimms = null,
    string OperatingSystem = null,
    string OperatingSystemVersion = null,
    string PmemInMbs = null,
    string PowerState = null,
    string PrimaryIp = null,
    CloudBridgeAssetComputeScsiController ScsiController = null,
    string StorageProvisionedInMbs = null,
    double ThreadsPerCoreCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks">ConnectedNetworks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount">CoresCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel">CpuModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks">Disks</a></code> | <code>object</code> | disks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount">DisksCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName">DnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware">Firmware</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices">GpuDevices</a></code> | <code>object</code> | gpu_devices block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount">GpuDevicesCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState">GuestState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion">HardwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled">IsPmemEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled">IsTpmEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity">LatencySensitivity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs">MemoryInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics">Nics</a></code> | <code>object</code> | nics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount">NicsCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController">NvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | nvdimm_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms">Nvdimms</a></code> | <code>object</code> | nvdimms block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs">PmemInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState">PowerState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp">PrimaryIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController">ScsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | scsi_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs">StorageProvisionedInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount">ThreadsPerCoreCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}. |

---

##### `ConnectedNetworks`<sup>Optional</sup> <a name="ConnectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks"></a>

```csharp
public double ConnectedNetworks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}.

---

##### `CoresCount`<sup>Optional</sup> <a name="CoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount"></a>

```csharp
public double CoresCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `CpuModel`<sup>Optional</sup> <a name="CpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel"></a>

```csharp
public string CpuModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `Disks`<sup>Optional</sup> <a name="Disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks"></a>

```csharp
public object Disks { get; set; }
```

- *Type:* object

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks CloudBridgeAsset#disks}

---

##### `DisksCount`<sup>Optional</sup> <a name="DisksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount"></a>

```csharp
public double DisksCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}.

---

##### `DnsName`<sup>Optional</sup> <a name="DnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName"></a>

```csharp
public string DnsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}.

---

##### `Firmware`<sup>Optional</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware"></a>

```csharp
public string Firmware { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}.

---

##### `GpuDevices`<sup>Optional</sup> <a name="GpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices"></a>

```csharp
public object GpuDevices { get; set; }
```

- *Type:* object

gpu_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices CloudBridgeAsset#gpu_devices}

---

##### `GpuDevicesCount`<sup>Optional</sup> <a name="GpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount"></a>

```csharp
public double GpuDevicesCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}.

---

##### `GuestState`<sup>Optional</sup> <a name="GuestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState"></a>

```csharp
public string GuestState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}.

---

##### `HardwareVersion`<sup>Optional</sup> <a name="HardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion"></a>

```csharp
public string HardwareVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}.

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}.

---

##### `IsPmemEnabled`<sup>Optional</sup> <a name="IsPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled"></a>

```csharp
public object IsPmemEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}.

---

##### `IsTpmEnabled`<sup>Optional</sup> <a name="IsTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled"></a>

```csharp
public object IsTpmEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}.

---

##### `LatencySensitivity`<sup>Optional</sup> <a name="LatencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity"></a>

```csharp
public string LatencySensitivity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}.

---

##### `MemoryInMbs`<sup>Optional</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs"></a>

```csharp
public string MemoryInMbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `Nics`<sup>Optional</sup> <a name="Nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics"></a>

```csharp
public object Nics { get; set; }
```

- *Type:* object

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics CloudBridgeAsset#nics}

---

##### `NicsCount`<sup>Optional</sup> <a name="NicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount"></a>

```csharp
public double NicsCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}.

---

##### `NvdimmController`<sup>Optional</sup> <a name="NvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController"></a>

```csharp
public CloudBridgeAssetComputeNvdimmController NvdimmController { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

nvdimm_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimm_controller CloudBridgeAsset#nvdimm_controller}

---

##### `Nvdimms`<sup>Optional</sup> <a name="Nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms"></a>

```csharp
public object Nvdimms { get; set; }
```

- *Type:* object

nvdimms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimms CloudBridgeAsset#nvdimms}

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}.

---

##### `OperatingSystemVersion`<sup>Optional</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion"></a>

```csharp
public string OperatingSystemVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}.

---

##### `PmemInMbs`<sup>Optional</sup> <a name="PmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs"></a>

```csharp
public string PmemInMbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}.

---

##### `PowerState`<sup>Optional</sup> <a name="PowerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState"></a>

```csharp
public string PowerState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}.

---

##### `PrimaryIp`<sup>Optional</sup> <a name="PrimaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp"></a>

```csharp
public string PrimaryIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}.

---

##### `ScsiController`<sup>Optional</sup> <a name="ScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController"></a>

```csharp
public CloudBridgeAssetComputeScsiController ScsiController { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

scsi_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#scsi_controller CloudBridgeAsset#scsi_controller}

---

##### `StorageProvisionedInMbs`<sup>Optional</sup> <a name="StorageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs"></a>

```csharp
public string StorageProvisionedInMbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}.

---

##### `ThreadsPerCoreCount`<sup>Optional</sup> <a name="ThreadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount"></a>

```csharp
public double ThreadsPerCoreCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}.

---

### CloudBridgeAssetComputeDisks <a name="CloudBridgeAssetComputeDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeDisks {
    double BootOrder = null,
    string Location = null,
    string Name = null,
    string PersistentMode = null,
    string SizeInMbs = null,
    string Uuid = null,
    string UuidLun = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder">BootOrder</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode">PersistentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs">SizeInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid">Uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun">UuidLun</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}. |

---

##### `BootOrder`<sup>Optional</sup> <a name="BootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder"></a>

```csharp
public double BootOrder { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

##### `PersistentMode`<sup>Optional</sup> <a name="PersistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode"></a>

```csharp
public string PersistentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}.

---

##### `SizeInMbs`<sup>Optional</sup> <a name="SizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs"></a>

```csharp
public string SizeInMbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}.

---

##### `UuidLun`<sup>Optional</sup> <a name="UuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun"></a>

```csharp
public string UuidLun { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}.

---

### CloudBridgeAssetComputeGpuDevices <a name="CloudBridgeAssetComputeGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeGpuDevices {
    double CoresCount = null,
    string Description = null,
    string Manufacturer = null,
    string MemoryInMbs = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount">CoresCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer">Manufacturer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs">MemoryInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `CoresCount`<sup>Optional</sup> <a name="CoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount"></a>

```csharp
public double CoresCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `Manufacturer`<sup>Optional</sup> <a name="Manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer"></a>

```csharp
public string Manufacturer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}.

---

##### `MemoryInMbs`<sup>Optional</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs"></a>

```csharp
public string MemoryInMbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

### CloudBridgeAssetComputeNics <a name="CloudBridgeAssetComputeNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeNics {
    string[] IpAddresses = null,
    string Label = null,
    string MacAddress = null,
    string MacAddressType = null,
    string NetworkName = null,
    string SwitchName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress">MacAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType">MacAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName">NetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName">SwitchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}. |

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress"></a>

```csharp
public string MacAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}.

---

##### `MacAddressType`<sup>Optional</sup> <a name="MacAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType"></a>

```csharp
public string MacAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}.

---

##### `NetworkName`<sup>Optional</sup> <a name="NetworkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName"></a>

```csharp
public string NetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}.

---

##### `SwitchName`<sup>Optional</sup> <a name="SwitchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName"></a>

```csharp
public string SwitchName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}.

---

### CloudBridgeAssetComputeNvdimmController <a name="CloudBridgeAssetComputeNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeNvdimmController {
    double BusNumber = null,
    string Label = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber">BusNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |

---

##### `BusNumber`<sup>Optional</sup> <a name="BusNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber"></a>

```csharp
public double BusNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

### CloudBridgeAssetComputeNvdimms <a name="CloudBridgeAssetComputeNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeNvdimms {
    double ControllerKey = null,
    string Label = null,
    double UnitNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey">ControllerKey</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber">UnitNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `ControllerKey`<sup>Optional</sup> <a name="ControllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey"></a>

```csharp
public double ControllerKey { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `UnitNumber`<sup>Optional</sup> <a name="UnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber"></a>

```csharp
public double UnitNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetComputeScsiController <a name="CloudBridgeAssetComputeScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeScsiController {
    string Label = null,
    string SharedBus = null,
    double UnitNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus">SharedBus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber">UnitNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `Label`<sup>Optional</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `SharedBus`<sup>Optional</sup> <a name="SharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus"></a>

```csharp
public string SharedBus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}.

---

##### `UnitNumber`<sup>Optional</sup> <a name="UnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber"></a>

```csharp
public double UnitNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetConfig <a name="CloudBridgeAssetConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssetType,
    string CompartmentId,
    string ExternalAssetKey,
    string InventoryId,
    string SourceKey,
    string[] AssetSourceIds = null,
    CloudBridgeAssetCompute Compute = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    CloudBridgeAssetTimeouts Timeouts = null,
    CloudBridgeAssetVm Vm = null,
    CloudBridgeAssetVmwareVcenter VmwareVcenter = null,
    CloudBridgeAssetVmwareVm VmwareVm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType">AssetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey">ExternalAssetKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId">InventoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey">SourceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds">AssetSourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute">Compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | compute block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm">Vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | vm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter">VmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | vmware_vcenter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm">VmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | vmware_vm block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType"></a>

```csharp
public string AssetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}.

---

##### `ExternalAssetKey`<sup>Required</sup> <a name="ExternalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey"></a>

```csharp
public string ExternalAssetKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}.

---

##### `InventoryId`<sup>Required</sup> <a name="InventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId"></a>

```csharp
public string InventoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}.

---

##### `SourceKey`<sup>Required</sup> <a name="SourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey"></a>

```csharp
public string SourceKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}.

---

##### `AssetSourceIds`<sup>Optional</sup> <a name="AssetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds"></a>

```csharp
public string[] AssetSourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}.

---

##### `Compute`<sup>Optional</sup> <a name="Compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute"></a>

```csharp
public CloudBridgeAssetCompute Compute { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compute CloudBridgeAsset#compute}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts"></a>

```csharp
public CloudBridgeAssetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#timeouts CloudBridgeAsset#timeouts}

---

##### `Vm`<sup>Optional</sup> <a name="Vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm"></a>

```csharp
public CloudBridgeAssetVm Vm { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vm CloudBridgeAsset#vm}

---

##### `VmwareVcenter`<sup>Optional</sup> <a name="VmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter"></a>

```csharp
public CloudBridgeAssetVmwareVcenter VmwareVcenter { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

vmware_vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vcenter CloudBridgeAsset#vmware_vcenter}

---

##### `VmwareVm`<sup>Optional</sup> <a name="VmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm"></a>

```csharp
public CloudBridgeAssetVmwareVm VmwareVm { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

vmware_vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vm CloudBridgeAsset#vmware_vm}

---

### CloudBridgeAssetTimeouts <a name="CloudBridgeAssetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}.

---

### CloudBridgeAssetVm <a name="CloudBridgeAssetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVm {
    string HypervisorHost = null,
    string HypervisorVendor = null,
    string HypervisorVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost">HypervisorHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor">HypervisorVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion">HypervisorVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}. |

---

##### `HypervisorHost`<sup>Optional</sup> <a name="HypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost"></a>

```csharp
public string HypervisorHost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}.

---

##### `HypervisorVendor`<sup>Optional</sup> <a name="HypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor"></a>

```csharp
public string HypervisorVendor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}.

---

##### `HypervisorVersion`<sup>Optional</sup> <a name="HypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion"></a>

```csharp
public string HypervisorVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}.

---

### CloudBridgeAssetVmwareVcenter <a name="CloudBridgeAssetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVmwareVcenter {
    string DataCenter = null,
    string VcenterKey = null,
    string VcenterVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter">DataCenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey">VcenterKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion">VcenterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}. |

---

##### `DataCenter`<sup>Optional</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter"></a>

```csharp
public string DataCenter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}.

---

##### `VcenterKey`<sup>Optional</sup> <a name="VcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey"></a>

```csharp
public string VcenterKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}.

---

##### `VcenterVersion`<sup>Optional</sup> <a name="VcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion"></a>

```csharp
public string VcenterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}.

---

### CloudBridgeAssetVmwareVm <a name="CloudBridgeAssetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVmwareVm {
    string Cluster = null,
    string[] CustomerFields = null,
    object CustomerTags = null,
    double FaultToleranceBandwidth = null,
    double FaultToleranceSecondaryLatency = null,
    string FaultToleranceState = null,
    string InstanceUuid = null,
    object IsDisksCbtEnabled = null,
    object IsDisksUuidEnabled = null,
    string Path = null,
    string VmwareToolsStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster">Cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields">CustomerFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags">CustomerTags</a></code> | <code>object</code> | customer_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth">FaultToleranceBandwidth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency">FaultToleranceSecondaryLatency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState">FaultToleranceState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid">InstanceUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled">IsDisksCbtEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled">IsDisksUuidEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus">VmwareToolsStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}. |

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}.

---

##### `CustomerFields`<sup>Optional</sup> <a name="CustomerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields"></a>

```csharp
public string[] CustomerFields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}.

---

##### `CustomerTags`<sup>Optional</sup> <a name="CustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags"></a>

```csharp
public object CustomerTags { get; set; }
```

- *Type:* object

customer_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_tags CloudBridgeAsset#customer_tags}

---

##### `FaultToleranceBandwidth`<sup>Optional</sup> <a name="FaultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth"></a>

```csharp
public double FaultToleranceBandwidth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}.

---

##### `FaultToleranceSecondaryLatency`<sup>Optional</sup> <a name="FaultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency"></a>

```csharp
public double FaultToleranceSecondaryLatency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}.

---

##### `FaultToleranceState`<sup>Optional</sup> <a name="FaultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState"></a>

```csharp
public string FaultToleranceState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}.

---

##### `InstanceUuid`<sup>Optional</sup> <a name="InstanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid"></a>

```csharp
public string InstanceUuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}.

---

##### `IsDisksCbtEnabled`<sup>Optional</sup> <a name="IsDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled"></a>

```csharp
public object IsDisksCbtEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}.

---

##### `IsDisksUuidEnabled`<sup>Optional</sup> <a name="IsDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled"></a>

```csharp
public object IsDisksUuidEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}.

---

##### `VmwareToolsStatus`<sup>Optional</sup> <a name="VmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus"></a>

```csharp
public string VmwareToolsStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}.

---

### CloudBridgeAssetVmwareVmCustomerTags <a name="CloudBridgeAssetVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVmwareVmCustomerTags {
    string Description = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAssetComputeDisksList <a name="CloudBridgeAssetComputeDisksList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeDisksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get"></a>

```csharp
private CloudBridgeAssetComputeDisksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetComputeDisksOutputReference <a name="CloudBridgeAssetComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeDisksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder">ResetBootOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode">ResetPersistentMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs">ResetSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun">ResetUuidLun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootOrder` <a name="ResetBootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder"></a>

```csharp
private void ResetBootOrder()
```

##### `ResetLocation` <a name="ResetLocation" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPersistentMode` <a name="ResetPersistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode"></a>

```csharp
private void ResetPersistentMode()
```

##### `ResetSizeInMbs` <a name="ResetSizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs"></a>

```csharp
private void ResetSizeInMbs()
```

##### `ResetUuid` <a name="ResetUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid"></a>

```csharp
private void ResetUuid()
```

##### `ResetUuidLun` <a name="ResetUuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun"></a>

```csharp
private void ResetUuidLun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput">BootOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput">PersistentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput">SizeInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput">UuidLunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder">BootOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode">PersistentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs">SizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun">UuidLun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootOrderInput`<sup>Optional</sup> <a name="BootOrderInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput"></a>

```csharp
public double BootOrderInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PersistentModeInput`<sup>Optional</sup> <a name="PersistentModeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput"></a>

```csharp
public string PersistentModeInput { get; }
```

- *Type:* string

---

##### `SizeInMbsInput`<sup>Optional</sup> <a name="SizeInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput"></a>

```csharp
public string SizeInMbsInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `UuidLunInput`<sup>Optional</sup> <a name="UuidLunInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput"></a>

```csharp
public string UuidLunInput { get; }
```

- *Type:* string

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder"></a>

```csharp
public double BootOrder { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PersistentMode`<sup>Required</sup> <a name="PersistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode"></a>

```csharp
public string PersistentMode { get; }
```

- *Type:* string

---

##### `SizeInMbs`<sup>Required</sup> <a name="SizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs"></a>

```csharp
public string SizeInMbs { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `UuidLun`<sup>Required</sup> <a name="UuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun"></a>

```csharp
public string UuidLun { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetComputeGpuDevicesList <a name="CloudBridgeAssetComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeGpuDevicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get"></a>

```csharp
private CloudBridgeAssetComputeGpuDevicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetComputeGpuDevicesOutputReference <a name="CloudBridgeAssetComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeGpuDevicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount">ResetCoresCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer">ResetManufacturer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs">ResetMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoresCount` <a name="ResetCoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount"></a>

```csharp
private void ResetCoresCount()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetManufacturer` <a name="ResetManufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer"></a>

```csharp
private void ResetManufacturer()
```

##### `ResetMemoryInMbs` <a name="ResetMemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs"></a>

```csharp
private void ResetMemoryInMbs()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput">CoresCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput">ManufacturerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput">MemoryInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount">CoresCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer">Manufacturer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs">MemoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoresCountInput`<sup>Optional</sup> <a name="CoresCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput"></a>

```csharp
public double CoresCountInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ManufacturerInput`<sup>Optional</sup> <a name="ManufacturerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput"></a>

```csharp
public string ManufacturerInput { get; }
```

- *Type:* string

---

##### `MemoryInMbsInput`<sup>Optional</sup> <a name="MemoryInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput"></a>

```csharp
public string MemoryInMbsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CoresCount`<sup>Required</sup> <a name="CoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount"></a>

```csharp
public double CoresCount { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Manufacturer`<sup>Required</sup> <a name="Manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer"></a>

```csharp
public string Manufacturer { get; }
```

- *Type:* string

---

##### `MemoryInMbs`<sup>Required</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```csharp
public string MemoryInMbs { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetComputeNicsList <a name="CloudBridgeAssetComputeNicsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeNicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get"></a>

```csharp
private CloudBridgeAssetComputeNicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetComputeNicsOutputReference <a name="CloudBridgeAssetComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeNicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType">ResetMacAddressType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName">ResetNetworkName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName">ResetSwitchName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses"></a>

```csharp
private void ResetIpAddresses()
```

##### `ResetLabel` <a name="ResetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress"></a>

```csharp
private void ResetMacAddress()
```

##### `ResetMacAddressType` <a name="ResetMacAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType"></a>

```csharp
private void ResetMacAddressType()
```

##### `ResetNetworkName` <a name="ResetNetworkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName"></a>

```csharp
private void ResetNetworkName()
```

##### `ResetSwitchName` <a name="ResetSwitchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName"></a>

```csharp
private void ResetSwitchName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput">IpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput">MacAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput">MacAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput">NetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput">SwitchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType">MacAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName">NetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName">SwitchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput"></a>

```csharp
public string[] IpAddressesInput { get; }
```

- *Type:* string[]

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput"></a>

```csharp
public string MacAddressInput { get; }
```

- *Type:* string

---

##### `MacAddressTypeInput`<sup>Optional</sup> <a name="MacAddressTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput"></a>

```csharp
public string MacAddressTypeInput { get; }
```

- *Type:* string

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput"></a>

```csharp
public string NetworkNameInput { get; }
```

- *Type:* string

---

##### `SwitchNameInput`<sup>Optional</sup> <a name="SwitchNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput"></a>

```csharp
public string SwitchNameInput { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `MacAddressType`<sup>Required</sup> <a name="MacAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType"></a>

```csharp
public string MacAddressType { get; }
```

- *Type:* string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName"></a>

```csharp
public string NetworkName { get; }
```

- *Type:* string

---

##### `SwitchName`<sup>Required</sup> <a name="SwitchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName"></a>

```csharp
public string SwitchName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetComputeNvdimmControllerOutputReference <a name="CloudBridgeAssetComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeNvdimmControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber">ResetBusNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBusNumber` <a name="ResetBusNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber"></a>

```csharp
private void ResetBusNumber()
```

##### `ResetLabel` <a name="ResetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput">BusNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber">BusNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BusNumberInput`<sup>Optional</sup> <a name="BusNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput"></a>

```csharp
public double BusNumberInput { get; }
```

- *Type:* double

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `BusNumber`<sup>Required</sup> <a name="BusNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber"></a>

```csharp
public double BusNumber { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue"></a>

```csharp
public CloudBridgeAssetComputeNvdimmController InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---


### CloudBridgeAssetComputeNvdimmsList <a name="CloudBridgeAssetComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeNvdimmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get"></a>

```csharp
private CloudBridgeAssetComputeNvdimmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetComputeNvdimmsOutputReference <a name="CloudBridgeAssetComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeNvdimmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey">ResetControllerKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber">ResetUnitNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControllerKey` <a name="ResetControllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey"></a>

```csharp
private void ResetControllerKey()
```

##### `ResetLabel` <a name="ResetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetUnitNumber` <a name="ResetUnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber"></a>

```csharp
private void ResetUnitNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput">ControllerKeyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput">UnitNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey">ControllerKey</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber">UnitNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControllerKeyInput`<sup>Optional</sup> <a name="ControllerKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput"></a>

```csharp
public double ControllerKeyInput { get; }
```

- *Type:* double

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `UnitNumberInput`<sup>Optional</sup> <a name="UnitNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput"></a>

```csharp
public double UnitNumberInput { get; }
```

- *Type:* double

---

##### `ControllerKey`<sup>Required</sup> <a name="ControllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey"></a>

```csharp
public double ControllerKey { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `UnitNumber`<sup>Required</sup> <a name="UnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber"></a>

```csharp
public double UnitNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetComputeOutputReference <a name="CloudBridgeAssetComputeOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks">PutDisks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices">PutGpuDevices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics">PutNics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController">PutNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms">PutNvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController">PutScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks">ResetConnectedNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount">ResetCoresCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel">ResetCpuModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks">ResetDisks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount">ResetDisksCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName">ResetDnsName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware">ResetFirmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices">ResetGpuDevices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount">ResetGpuDevicesCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState">ResetGuestState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion">ResetHardwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled">ResetIsPmemEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled">ResetIsTpmEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity">ResetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs">ResetMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics">ResetNics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount">ResetNicsCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController">ResetNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms">ResetNvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion">ResetOperatingSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs">ResetPmemInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState">ResetPowerState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp">ResetPrimaryIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController">ResetScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs">ResetStorageProvisionedInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount">ResetThreadsPerCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisks` <a name="PutDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks"></a>

```csharp
private void PutDisks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks.parameter.value"></a>

- *Type:* object

---

##### `PutGpuDevices` <a name="PutGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices"></a>

```csharp
private void PutGpuDevices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices.parameter.value"></a>

- *Type:* object

---

##### `PutNics` <a name="PutNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics"></a>

```csharp
private void PutNics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics.parameter.value"></a>

- *Type:* object

---

##### `PutNvdimmController` <a name="PutNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController"></a>

```csharp
private void PutNvdimmController(CloudBridgeAssetComputeNvdimmController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `PutNvdimms` <a name="PutNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms"></a>

```csharp
private void PutNvdimms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms.parameter.value"></a>

- *Type:* object

---

##### `PutScsiController` <a name="PutScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController"></a>

```csharp
private void PutScsiController(CloudBridgeAssetComputeScsiController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `ResetConnectedNetworks` <a name="ResetConnectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks"></a>

```csharp
private void ResetConnectedNetworks()
```

##### `ResetCoresCount` <a name="ResetCoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount"></a>

```csharp
private void ResetCoresCount()
```

##### `ResetCpuModel` <a name="ResetCpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel"></a>

```csharp
private void ResetCpuModel()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisks` <a name="ResetDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks"></a>

```csharp
private void ResetDisks()
```

##### `ResetDisksCount` <a name="ResetDisksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount"></a>

```csharp
private void ResetDisksCount()
```

##### `ResetDnsName` <a name="ResetDnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName"></a>

```csharp
private void ResetDnsName()
```

##### `ResetFirmware` <a name="ResetFirmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware"></a>

```csharp
private void ResetFirmware()
```

##### `ResetGpuDevices` <a name="ResetGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices"></a>

```csharp
private void ResetGpuDevices()
```

##### `ResetGpuDevicesCount` <a name="ResetGpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount"></a>

```csharp
private void ResetGpuDevicesCount()
```

##### `ResetGuestState` <a name="ResetGuestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState"></a>

```csharp
private void ResetGuestState()
```

##### `ResetHardwareVersion` <a name="ResetHardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion"></a>

```csharp
private void ResetHardwareVersion()
```

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName"></a>

```csharp
private void ResetHostName()
```

##### `ResetIsPmemEnabled` <a name="ResetIsPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled"></a>

```csharp
private void ResetIsPmemEnabled()
```

##### `ResetIsTpmEnabled` <a name="ResetIsTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled"></a>

```csharp
private void ResetIsTpmEnabled()
```

##### `ResetLatencySensitivity` <a name="ResetLatencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity"></a>

```csharp
private void ResetLatencySensitivity()
```

##### `ResetMemoryInMbs` <a name="ResetMemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs"></a>

```csharp
private void ResetMemoryInMbs()
```

##### `ResetNics` <a name="ResetNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics"></a>

```csharp
private void ResetNics()
```

##### `ResetNicsCount` <a name="ResetNicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount"></a>

```csharp
private void ResetNicsCount()
```

##### `ResetNvdimmController` <a name="ResetNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController"></a>

```csharp
private void ResetNvdimmController()
```

##### `ResetNvdimms` <a name="ResetNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms"></a>

```csharp
private void ResetNvdimms()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetOperatingSystemVersion` <a name="ResetOperatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion"></a>

```csharp
private void ResetOperatingSystemVersion()
```

##### `ResetPmemInMbs` <a name="ResetPmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs"></a>

```csharp
private void ResetPmemInMbs()
```

##### `ResetPowerState` <a name="ResetPowerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState"></a>

```csharp
private void ResetPowerState()
```

##### `ResetPrimaryIp` <a name="ResetPrimaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp"></a>

```csharp
private void ResetPrimaryIp()
```

##### `ResetScsiController` <a name="ResetScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController"></a>

```csharp
private void ResetScsiController()
```

##### `ResetStorageProvisionedInMbs` <a name="ResetStorageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs"></a>

```csharp
private void ResetStorageProvisionedInMbs()
```

##### `ResetThreadsPerCoreCount` <a name="ResetThreadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount"></a>

```csharp
private void ResetThreadsPerCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks">Disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices">GpuDevices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics">Nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController">NvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms">Nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController">ScsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput">ConnectedNetworksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput">CoresCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput">CpuModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput">DisksCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput">DisksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput">DnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput">FirmwareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput">GpuDevicesCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput">GpuDevicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput">GuestStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput">HardwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput">IsPmemEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput">IsTpmEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput">LatencySensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput">MemoryInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput">NicsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput">NicsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput">NvdimmControllerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput">NvdimmsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput">OperatingSystemVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput">PmemInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput">PowerStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput">PrimaryIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput">ScsiControllerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput">StorageProvisionedInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput">ThreadsPerCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks">ConnectedNetworks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount">CoresCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel">CpuModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount">DisksCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware">Firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount">GpuDevicesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState">GuestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion">HardwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled">IsPmemEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled">IsTpmEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity">LatencySensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs">MemoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount">NicsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs">PmemInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState">PowerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp">PrimaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs">StorageProvisionedInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount">ThreadsPerCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disks`<sup>Required</sup> <a name="Disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks"></a>

```csharp
public CloudBridgeAssetComputeDisksList Disks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a>

---

##### `GpuDevices`<sup>Required</sup> <a name="GpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices"></a>

```csharp
public CloudBridgeAssetComputeGpuDevicesList GpuDevices { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a>

---

##### `Nics`<sup>Required</sup> <a name="Nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics"></a>

```csharp
public CloudBridgeAssetComputeNicsList Nics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a>

---

##### `NvdimmController`<sup>Required</sup> <a name="NvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController"></a>

```csharp
public CloudBridgeAssetComputeNvdimmControllerOutputReference NvdimmController { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a>

---

##### `Nvdimms`<sup>Required</sup> <a name="Nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms"></a>

```csharp
public CloudBridgeAssetComputeNvdimmsList Nvdimms { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a>

---

##### `ScsiController`<sup>Required</sup> <a name="ScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController"></a>

```csharp
public CloudBridgeAssetComputeScsiControllerOutputReference ScsiController { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a>

---

##### `ConnectedNetworksInput`<sup>Optional</sup> <a name="ConnectedNetworksInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput"></a>

```csharp
public double ConnectedNetworksInput { get; }
```

- *Type:* double

---

##### `CoresCountInput`<sup>Optional</sup> <a name="CoresCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput"></a>

```csharp
public double CoresCountInput { get; }
```

- *Type:* double

---

##### `CpuModelInput`<sup>Optional</sup> <a name="CpuModelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput"></a>

```csharp
public string CpuModelInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisksCountInput`<sup>Optional</sup> <a name="DisksCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput"></a>

```csharp
public double DisksCountInput { get; }
```

- *Type:* double

---

##### `DisksInput`<sup>Optional</sup> <a name="DisksInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput"></a>

```csharp
public object DisksInput { get; }
```

- *Type:* object

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput"></a>

```csharp
public string DnsNameInput { get; }
```

- *Type:* string

---

##### `FirmwareInput`<sup>Optional</sup> <a name="FirmwareInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput"></a>

```csharp
public string FirmwareInput { get; }
```

- *Type:* string

---

##### `GpuDevicesCountInput`<sup>Optional</sup> <a name="GpuDevicesCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput"></a>

```csharp
public double GpuDevicesCountInput { get; }
```

- *Type:* double

---

##### `GpuDevicesInput`<sup>Optional</sup> <a name="GpuDevicesInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput"></a>

```csharp
public object GpuDevicesInput { get; }
```

- *Type:* object

---

##### `GuestStateInput`<sup>Optional</sup> <a name="GuestStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput"></a>

```csharp
public string GuestStateInput { get; }
```

- *Type:* string

---

##### `HardwareVersionInput`<sup>Optional</sup> <a name="HardwareVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput"></a>

```csharp
public string HardwareVersionInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `IsPmemEnabledInput`<sup>Optional</sup> <a name="IsPmemEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput"></a>

```csharp
public object IsPmemEnabledInput { get; }
```

- *Type:* object

---

##### `IsTpmEnabledInput`<sup>Optional</sup> <a name="IsTpmEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput"></a>

```csharp
public object IsTpmEnabledInput { get; }
```

- *Type:* object

---

##### `LatencySensitivityInput`<sup>Optional</sup> <a name="LatencySensitivityInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput"></a>

```csharp
public string LatencySensitivityInput { get; }
```

- *Type:* string

---

##### `MemoryInMbsInput`<sup>Optional</sup> <a name="MemoryInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput"></a>

```csharp
public string MemoryInMbsInput { get; }
```

- *Type:* string

---

##### `NicsCountInput`<sup>Optional</sup> <a name="NicsCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput"></a>

```csharp
public double NicsCountInput { get; }
```

- *Type:* double

---

##### `NicsInput`<sup>Optional</sup> <a name="NicsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput"></a>

```csharp
public object NicsInput { get; }
```

- *Type:* object

---

##### `NvdimmControllerInput`<sup>Optional</sup> <a name="NvdimmControllerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput"></a>

```csharp
public CloudBridgeAssetComputeNvdimmController NvdimmControllerInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `NvdimmsInput`<sup>Optional</sup> <a name="NvdimmsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput"></a>

```csharp
public object NvdimmsInput { get; }
```

- *Type:* object

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `OperatingSystemVersionInput`<sup>Optional</sup> <a name="OperatingSystemVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput"></a>

```csharp
public string OperatingSystemVersionInput { get; }
```

- *Type:* string

---

##### `PmemInMbsInput`<sup>Optional</sup> <a name="PmemInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput"></a>

```csharp
public string PmemInMbsInput { get; }
```

- *Type:* string

---

##### `PowerStateInput`<sup>Optional</sup> <a name="PowerStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput"></a>

```csharp
public string PowerStateInput { get; }
```

- *Type:* string

---

##### `PrimaryIpInput`<sup>Optional</sup> <a name="PrimaryIpInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput"></a>

```csharp
public string PrimaryIpInput { get; }
```

- *Type:* string

---

##### `ScsiControllerInput`<sup>Optional</sup> <a name="ScsiControllerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput"></a>

```csharp
public CloudBridgeAssetComputeScsiController ScsiControllerInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `StorageProvisionedInMbsInput`<sup>Optional</sup> <a name="StorageProvisionedInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput"></a>

```csharp
public string StorageProvisionedInMbsInput { get; }
```

- *Type:* string

---

##### `ThreadsPerCoreCountInput`<sup>Optional</sup> <a name="ThreadsPerCoreCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput"></a>

```csharp
public double ThreadsPerCoreCountInput { get; }
```

- *Type:* double

---

##### `ConnectedNetworks`<sup>Required</sup> <a name="ConnectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks"></a>

```csharp
public double ConnectedNetworks { get; }
```

- *Type:* double

---

##### `CoresCount`<sup>Required</sup> <a name="CoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount"></a>

```csharp
public double CoresCount { get; }
```

- *Type:* double

---

##### `CpuModel`<sup>Required</sup> <a name="CpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel"></a>

```csharp
public string CpuModel { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisksCount`<sup>Required</sup> <a name="DisksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount"></a>

```csharp
public double DisksCount { get; }
```

- *Type:* double

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware"></a>

```csharp
public string Firmware { get; }
```

- *Type:* string

---

##### `GpuDevicesCount`<sup>Required</sup> <a name="GpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount"></a>

```csharp
public double GpuDevicesCount { get; }
```

- *Type:* double

---

##### `GuestState`<sup>Required</sup> <a name="GuestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState"></a>

```csharp
public string GuestState { get; }
```

- *Type:* string

---

##### `HardwareVersion`<sup>Required</sup> <a name="HardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion"></a>

```csharp
public string HardwareVersion { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `IsPmemEnabled`<sup>Required</sup> <a name="IsPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled"></a>

```csharp
public object IsPmemEnabled { get; }
```

- *Type:* object

---

##### `IsTpmEnabled`<sup>Required</sup> <a name="IsTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled"></a>

```csharp
public object IsTpmEnabled { get; }
```

- *Type:* object

---

##### `LatencySensitivity`<sup>Required</sup> <a name="LatencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity"></a>

```csharp
public string LatencySensitivity { get; }
```

- *Type:* string

---

##### `MemoryInMbs`<sup>Required</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs"></a>

```csharp
public string MemoryInMbs { get; }
```

- *Type:* string

---

##### `NicsCount`<sup>Required</sup> <a name="NicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount"></a>

```csharp
public double NicsCount { get; }
```

- *Type:* double

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `OperatingSystemVersion`<sup>Required</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion"></a>

```csharp
public string OperatingSystemVersion { get; }
```

- *Type:* string

---

##### `PmemInMbs`<sup>Required</sup> <a name="PmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs"></a>

```csharp
public string PmemInMbs { get; }
```

- *Type:* string

---

##### `PowerState`<sup>Required</sup> <a name="PowerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState"></a>

```csharp
public string PowerState { get; }
```

- *Type:* string

---

##### `PrimaryIp`<sup>Required</sup> <a name="PrimaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp"></a>

```csharp
public string PrimaryIp { get; }
```

- *Type:* string

---

##### `StorageProvisionedInMbs`<sup>Required</sup> <a name="StorageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs"></a>

```csharp
public string StorageProvisionedInMbs { get; }
```

- *Type:* string

---

##### `ThreadsPerCoreCount`<sup>Required</sup> <a name="ThreadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount"></a>

```csharp
public double ThreadsPerCoreCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue"></a>

```csharp
public CloudBridgeAssetCompute InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---


### CloudBridgeAssetComputeScsiControllerOutputReference <a name="CloudBridgeAssetComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetComputeScsiControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus">ResetSharedBus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber">ResetUnitNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabel` <a name="ResetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetSharedBus` <a name="ResetSharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus"></a>

```csharp
private void ResetSharedBus()
```

##### `ResetUnitNumber` <a name="ResetUnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber"></a>

```csharp
private void ResetUnitNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput">SharedBusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput">UnitNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus">SharedBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber">UnitNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `SharedBusInput`<sup>Optional</sup> <a name="SharedBusInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput"></a>

```csharp
public string SharedBusInput { get; }
```

- *Type:* string

---

##### `UnitNumberInput`<sup>Optional</sup> <a name="UnitNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput"></a>

```csharp
public double UnitNumberInput { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `SharedBus`<sup>Required</sup> <a name="SharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus"></a>

```csharp
public string SharedBus { get; }
```

- *Type:* string

---

##### `UnitNumber`<sup>Required</sup> <a name="UnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber"></a>

```csharp
public double UnitNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue"></a>

```csharp
public CloudBridgeAssetComputeScsiController InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---


### CloudBridgeAssetTimeoutsOutputReference <a name="CloudBridgeAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetVmOutputReference <a name="CloudBridgeAssetVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost">ResetHypervisorHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor">ResetHypervisorVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion">ResetHypervisorVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHypervisorHost` <a name="ResetHypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost"></a>

```csharp
private void ResetHypervisorHost()
```

##### `ResetHypervisorVendor` <a name="ResetHypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor"></a>

```csharp
private void ResetHypervisorVendor()
```

##### `ResetHypervisorVersion` <a name="ResetHypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion"></a>

```csharp
private void ResetHypervisorVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput">HypervisorHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput">HypervisorVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput">HypervisorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost">HypervisorHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor">HypervisorVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion">HypervisorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HypervisorHostInput`<sup>Optional</sup> <a name="HypervisorHostInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput"></a>

```csharp
public string HypervisorHostInput { get; }
```

- *Type:* string

---

##### `HypervisorVendorInput`<sup>Optional</sup> <a name="HypervisorVendorInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput"></a>

```csharp
public string HypervisorVendorInput { get; }
```

- *Type:* string

---

##### `HypervisorVersionInput`<sup>Optional</sup> <a name="HypervisorVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput"></a>

```csharp
public string HypervisorVersionInput { get; }
```

- *Type:* string

---

##### `HypervisorHost`<sup>Required</sup> <a name="HypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost"></a>

```csharp
public string HypervisorHost { get; }
```

- *Type:* string

---

##### `HypervisorVendor`<sup>Required</sup> <a name="HypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor"></a>

```csharp
public string HypervisorVendor { get; }
```

- *Type:* string

---

##### `HypervisorVersion`<sup>Required</sup> <a name="HypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion"></a>

```csharp
public string HypervisorVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue"></a>

```csharp
public CloudBridgeAssetVm InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---


### CloudBridgeAssetVmwareVcenterOutputReference <a name="CloudBridgeAssetVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVmwareVcenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter">ResetDataCenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey">ResetVcenterKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion">ResetVcenterVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataCenter` <a name="ResetDataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter"></a>

```csharp
private void ResetDataCenter()
```

##### `ResetVcenterKey` <a name="ResetVcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey"></a>

```csharp
private void ResetVcenterKey()
```

##### `ResetVcenterVersion` <a name="ResetVcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion"></a>

```csharp
private void ResetVcenterVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput">DataCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput">VcenterKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput">VcenterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter">DataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey">VcenterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion">VcenterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataCenterInput`<sup>Optional</sup> <a name="DataCenterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput"></a>

```csharp
public string DataCenterInput { get; }
```

- *Type:* string

---

##### `VcenterKeyInput`<sup>Optional</sup> <a name="VcenterKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput"></a>

```csharp
public string VcenterKeyInput { get; }
```

- *Type:* string

---

##### `VcenterVersionInput`<sup>Optional</sup> <a name="VcenterVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput"></a>

```csharp
public string VcenterVersionInput { get; }
```

- *Type:* string

---

##### `DataCenter`<sup>Required</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter"></a>

```csharp
public string DataCenter { get; }
```

- *Type:* string

---

##### `VcenterKey`<sup>Required</sup> <a name="VcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey"></a>

```csharp
public string VcenterKey { get; }
```

- *Type:* string

---

##### `VcenterVersion`<sup>Required</sup> <a name="VcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion"></a>

```csharp
public string VcenterVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue"></a>

```csharp
public CloudBridgeAssetVmwareVcenter InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---


### CloudBridgeAssetVmwareVmCustomerTagsList <a name="CloudBridgeAssetVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVmwareVmCustomerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get"></a>

```csharp
private CloudBridgeAssetVmwareVmCustomerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetVmwareVmCustomerTagsOutputReference <a name="CloudBridgeAssetVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVmwareVmCustomerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudBridgeAssetVmwareVmOutputReference <a name="CloudBridgeAssetVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CloudBridgeAssetVmwareVmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags">PutCustomerTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields">ResetCustomerFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags">ResetCustomerTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth">ResetFaultToleranceBandwidth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency">ResetFaultToleranceSecondaryLatency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState">ResetFaultToleranceState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid">ResetInstanceUuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled">ResetIsDisksCbtEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled">ResetIsDisksUuidEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus">ResetVmwareToolsStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerTags` <a name="PutCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags"></a>

```csharp
private void PutCustomerTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags.parameter.value"></a>

- *Type:* object

---

##### `ResetCluster` <a name="ResetCluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetCustomerFields` <a name="ResetCustomerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields"></a>

```csharp
private void ResetCustomerFields()
```

##### `ResetCustomerTags` <a name="ResetCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags"></a>

```csharp
private void ResetCustomerTags()
```

##### `ResetFaultToleranceBandwidth` <a name="ResetFaultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth"></a>

```csharp
private void ResetFaultToleranceBandwidth()
```

##### `ResetFaultToleranceSecondaryLatency` <a name="ResetFaultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency"></a>

```csharp
private void ResetFaultToleranceSecondaryLatency()
```

##### `ResetFaultToleranceState` <a name="ResetFaultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState"></a>

```csharp
private void ResetFaultToleranceState()
```

##### `ResetInstanceUuid` <a name="ResetInstanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid"></a>

```csharp
private void ResetInstanceUuid()
```

##### `ResetIsDisksCbtEnabled` <a name="ResetIsDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled"></a>

```csharp
private void ResetIsDisksCbtEnabled()
```

##### `ResetIsDisksUuidEnabled` <a name="ResetIsDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled"></a>

```csharp
private void ResetIsDisksUuidEnabled()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetVmwareToolsStatus` <a name="ResetVmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus"></a>

```csharp
private void ResetVmwareToolsStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags">CustomerTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput">CustomerFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput">CustomerTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput">FaultToleranceBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput">FaultToleranceSecondaryLatencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput">FaultToleranceStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput">InstanceUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput">IsDisksCbtEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput">IsDisksUuidEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput">VmwareToolsStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields">CustomerFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth">FaultToleranceBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency">FaultToleranceSecondaryLatency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState">FaultToleranceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid">InstanceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled">IsDisksCbtEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled">IsDisksUuidEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus">VmwareToolsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerTags`<sup>Required</sup> <a name="CustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags"></a>

```csharp
public CloudBridgeAssetVmwareVmCustomerTagsList CustomerTags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `CustomerFieldsInput`<sup>Optional</sup> <a name="CustomerFieldsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput"></a>

```csharp
public string[] CustomerFieldsInput { get; }
```

- *Type:* string[]

---

##### `CustomerTagsInput`<sup>Optional</sup> <a name="CustomerTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput"></a>

```csharp
public object CustomerTagsInput { get; }
```

- *Type:* object

---

##### `FaultToleranceBandwidthInput`<sup>Optional</sup> <a name="FaultToleranceBandwidthInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput"></a>

```csharp
public double FaultToleranceBandwidthInput { get; }
```

- *Type:* double

---

##### `FaultToleranceSecondaryLatencyInput`<sup>Optional</sup> <a name="FaultToleranceSecondaryLatencyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput"></a>

```csharp
public double FaultToleranceSecondaryLatencyInput { get; }
```

- *Type:* double

---

##### `FaultToleranceStateInput`<sup>Optional</sup> <a name="FaultToleranceStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput"></a>

```csharp
public string FaultToleranceStateInput { get; }
```

- *Type:* string

---

##### `InstanceUuidInput`<sup>Optional</sup> <a name="InstanceUuidInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput"></a>

```csharp
public string InstanceUuidInput { get; }
```

- *Type:* string

---

##### `IsDisksCbtEnabledInput`<sup>Optional</sup> <a name="IsDisksCbtEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput"></a>

```csharp
public object IsDisksCbtEnabledInput { get; }
```

- *Type:* object

---

##### `IsDisksUuidEnabledInput`<sup>Optional</sup> <a name="IsDisksUuidEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput"></a>

```csharp
public object IsDisksUuidEnabledInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `VmwareToolsStatusInput`<sup>Optional</sup> <a name="VmwareToolsStatusInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput"></a>

```csharp
public string VmwareToolsStatusInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `CustomerFields`<sup>Required</sup> <a name="CustomerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields"></a>

```csharp
public string[] CustomerFields { get; }
```

- *Type:* string[]

---

##### `FaultToleranceBandwidth`<sup>Required</sup> <a name="FaultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```csharp
public double FaultToleranceBandwidth { get; }
```

- *Type:* double

---

##### `FaultToleranceSecondaryLatency`<sup>Required</sup> <a name="FaultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```csharp
public double FaultToleranceSecondaryLatency { get; }
```

- *Type:* double

---

##### `FaultToleranceState`<sup>Required</sup> <a name="FaultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState"></a>

```csharp
public string FaultToleranceState { get; }
```

- *Type:* string

---

##### `InstanceUuid`<sup>Required</sup> <a name="InstanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid"></a>

```csharp
public string InstanceUuid { get; }
```

- *Type:* string

---

##### `IsDisksCbtEnabled`<sup>Required</sup> <a name="IsDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```csharp
public object IsDisksCbtEnabled { get; }
```

- *Type:* object

---

##### `IsDisksUuidEnabled`<sup>Required</sup> <a name="IsDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```csharp
public object IsDisksUuidEnabled { get; }
```

- *Type:* object

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `VmwareToolsStatus`<sup>Required</sup> <a name="VmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```csharp
public string VmwareToolsStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue"></a>

```csharp
public CloudBridgeAssetVmwareVm InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---



