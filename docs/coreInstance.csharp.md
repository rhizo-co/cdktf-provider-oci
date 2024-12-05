# `coreInstance` Submodule <a name="`coreInstance` Submodule" id="rhizo-co-terraform-provider-oci.coreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstance <a name="CoreInstance" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance oci_core_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstance(Construct Scope, string Id, CoreInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig">CoreInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig">CoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig">PutAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig">PutAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails">PutCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions">PutInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions">PutLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments">PutLaunchVolumeAttachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig">PutPlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig">PutPreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails">PutSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig">ResetAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync">ResetAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig">ResetAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId">ResetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId">ResetComputeClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails">ResetCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId">ResetDedicatedVmHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata">ResetExtendedMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain">ResetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId">ResetInstanceConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions">ResetInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript">ResetIpxeScript</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled">ResetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions">ResetLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments">ResetLaunchVolumeAttachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig">ResetPlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig">ResetPreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume">ResetPreserveBootVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch">ResetPreserveDataVolumesCreatedAtLaunch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails">ResetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint">ResetUpdateOperationConstraint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentConfig` <a name="PutAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig"></a>

```csharp
private void PutAgentConfig(CoreInstanceAgentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `PutAvailabilityConfig` <a name="PutAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig"></a>

```csharp
private void PutAvailabilityConfig(CoreInstanceAvailabilityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `PutCreateVnicDetails` <a name="PutCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails"></a>

```csharp
private void PutCreateVnicDetails(CoreInstanceCreateVnicDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `PutInstanceOptions` <a name="PutInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions"></a>

```csharp
private void PutInstanceOptions(CoreInstanceInstanceOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `PutLaunchOptions` <a name="PutLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions"></a>

```csharp
private void PutLaunchOptions(CoreInstanceLaunchOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `PutLaunchVolumeAttachments` <a name="PutLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments"></a>

```csharp
private void PutLaunchVolumeAttachments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments.parameter.value"></a>

- *Type:* object

---

##### `PutPlatformConfig` <a name="PutPlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig"></a>

```csharp
private void PutPlatformConfig(CoreInstancePlatformConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `PutPreemptibleInstanceConfig` <a name="PutPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig"></a>

```csharp
private void PutPreemptibleInstanceConfig(CoreInstancePreemptibleInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig"></a>

```csharp
private void PutShapeConfig(CoreInstanceShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `PutSourceDetails` <a name="PutSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails"></a>

```csharp
private void PutSourceDetails(CoreInstanceSourceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

---

##### `ResetAgentConfig` <a name="ResetAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig"></a>

```csharp
private void ResetAgentConfig()
```

##### `ResetAsync` <a name="ResetAsync" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync"></a>

```csharp
private void ResetAsync()
```

##### `ResetAvailabilityConfig` <a name="ResetAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig"></a>

```csharp
private void ResetAvailabilityConfig()
```

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId"></a>

```csharp
private void ResetCapacityReservationId()
```

##### `ResetClusterPlacementGroupId` <a name="ResetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId"></a>

```csharp
private void ResetClusterPlacementGroupId()
```

##### `ResetComputeClusterId` <a name="ResetComputeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId"></a>

```csharp
private void ResetComputeClusterId()
```

##### `ResetCreateVnicDetails` <a name="ResetCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails"></a>

```csharp
private void ResetCreateVnicDetails()
```

##### `ResetDedicatedVmHostId` <a name="ResetDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId"></a>

```csharp
private void ResetDedicatedVmHostId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExtendedMetadata` <a name="ResetExtendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata"></a>

```csharp
private void ResetExtendedMetadata()
```

##### `ResetFaultDomain` <a name="ResetFaultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain"></a>

```csharp
private void ResetFaultDomain()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel"></a>

```csharp
private void ResetHostnameLabel()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImage` <a name="ResetImage" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetInstanceConfigurationId` <a name="ResetInstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId"></a>

```csharp
private void ResetInstanceConfigurationId()
```

##### `ResetInstanceOptions` <a name="ResetInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions"></a>

```csharp
private void ResetInstanceOptions()
```

##### `ResetIpxeScript` <a name="ResetIpxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript"></a>

```csharp
private void ResetIpxeScript()
```

##### `ResetIsPvEncryptionInTransitEnabled` <a name="ResetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled"></a>

```csharp
private void ResetIsPvEncryptionInTransitEnabled()
```

##### `ResetLaunchOptions` <a name="ResetLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions"></a>

```csharp
private void ResetLaunchOptions()
```

##### `ResetLaunchVolumeAttachments` <a name="ResetLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments"></a>

```csharp
private void ResetLaunchVolumeAttachments()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetPlatformConfig` <a name="ResetPlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig"></a>

```csharp
private void ResetPlatformConfig()
```

##### `ResetPreemptibleInstanceConfig` <a name="ResetPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig"></a>

```csharp
private void ResetPreemptibleInstanceConfig()
```

##### `ResetPreserveBootVolume` <a name="ResetPreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume"></a>

```csharp
private void ResetPreserveBootVolume()
```

##### `ResetPreserveDataVolumesCreatedAtLaunch` <a name="ResetPreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch"></a>

```csharp
private void ResetPreserveDataVolumesCreatedAtLaunch()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes"></a>

```csharp
private void ResetSecurityAttributes()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape"></a>

```csharp
private void ResetShape()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig"></a>

```csharp
private void ResetShapeConfig()
```

##### `ResetSourceDetails` <a name="ResetSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails"></a>

```csharp
private void ResetSourceDetails()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdateOperationConstraint` <a name="ResetUpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint"></a>

```csharp
private void ResetUpdateOperationConstraint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig">AgentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig">AvailabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId">BootVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails">CreateVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions">InstanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode">IsCrossNumaNode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode">LaunchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions">LaunchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments">LaunchVolumeAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig">PlatformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig">PreemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp">PublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState">SecurityAttributesState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue">TimeMaintenanceRebootDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput">AgentConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput">AsyncInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput">AvailabilityConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput">ClusterPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput">CreateVnicDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput">DedicatedVmHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput">ExtendedMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput">FaultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput">InstanceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput">InstanceOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput">IpxeScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput">IsPvEncryptionInTransitEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput">LaunchOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput">LaunchVolumeAttachmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput">PlatformConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput">PreemptibleInstanceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput">PreserveBootVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput">PreserveDataVolumesCreatedAtLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput">SourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput">UpdateOperationConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async">Async</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId">DedicatedVmHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata">ExtendedMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId">InstanceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript">IpxeScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch">PreserveDataVolumesCreatedAtLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint">UpdateOperationConstraint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AgentConfig`<sup>Required</sup> <a name="AgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig"></a>

```csharp
public CoreInstanceAgentConfigOutputReference AgentConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a>

---

##### `AvailabilityConfig`<sup>Required</sup> <a name="AvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig"></a>

```csharp
public CoreInstanceAvailabilityConfigOutputReference AvailabilityConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a>

---

##### `BootVolumeId`<sup>Required</sup> <a name="BootVolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId"></a>

```csharp
public string BootVolumeId { get; }
```

- *Type:* string

---

##### `CreateVnicDetails`<sup>Required</sup> <a name="CreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails"></a>

```csharp
public CoreInstanceCreateVnicDetailsOutputReference CreateVnicDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a>

---

##### `InstanceOptions`<sup>Required</sup> <a name="InstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions"></a>

```csharp
public CoreInstanceInstanceOptionsOutputReference InstanceOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a>

---

##### `IsCrossNumaNode`<sup>Required</sup> <a name="IsCrossNumaNode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode"></a>

```csharp
public IResolvable IsCrossNumaNode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LaunchMode`<sup>Required</sup> <a name="LaunchMode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode"></a>

```csharp
public string LaunchMode { get; }
```

- *Type:* string

---

##### `LaunchOptions`<sup>Required</sup> <a name="LaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions"></a>

```csharp
public CoreInstanceLaunchOptionsOutputReference LaunchOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a>

---

##### `LaunchVolumeAttachments`<sup>Required</sup> <a name="LaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments"></a>

```csharp
public CoreInstanceLaunchVolumeAttachmentsList LaunchVolumeAttachments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a>

---

##### `PlatformConfig`<sup>Required</sup> <a name="PlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig"></a>

```csharp
public CoreInstancePlatformConfigOutputReference PlatformConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a>

---

##### `PreemptibleInstanceConfig`<sup>Required</sup> <a name="PreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig"></a>

```csharp
public CoreInstancePreemptibleInstanceConfigOutputReference PreemptibleInstanceConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a>

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp"></a>

```csharp
public string PublicIp { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityAttributesState`<sup>Required</sup> <a name="SecurityAttributesState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState"></a>

```csharp
public string SecurityAttributesState { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig"></a>

```csharp
public CoreInstanceShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a>

---

##### `SourceDetails`<sup>Required</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails"></a>

```csharp
public CoreInstanceSourceDetailsOutputReference SourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeMaintenanceRebootDue`<sup>Required</sup> <a name="TimeMaintenanceRebootDue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue"></a>

```csharp
public string TimeMaintenanceRebootDue { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts"></a>

```csharp
public CoreInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a>

---

##### `AgentConfigInput`<sup>Optional</sup> <a name="AgentConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput"></a>

```csharp
public CoreInstanceAgentConfig AgentConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `AsyncInput`<sup>Optional</sup> <a name="AsyncInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput"></a>

```csharp
public object AsyncInput { get; }
```

- *Type:* object

---

##### `AvailabilityConfigInput`<sup>Optional</sup> <a name="AvailabilityConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput"></a>

```csharp
public CoreInstanceAvailabilityConfig AvailabilityConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput"></a>

```csharp
public string CapacityReservationIdInput { get; }
```

- *Type:* string

---

##### `ClusterPlacementGroupIdInput`<sup>Optional</sup> <a name="ClusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput"></a>

```csharp
public string ClusterPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput"></a>

```csharp
public string ComputeClusterIdInput { get; }
```

- *Type:* string

---

##### `CreateVnicDetailsInput`<sup>Optional</sup> <a name="CreateVnicDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput"></a>

```csharp
public CoreInstanceCreateVnicDetails CreateVnicDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `DedicatedVmHostIdInput`<sup>Optional</sup> <a name="DedicatedVmHostIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput"></a>

```csharp
public string DedicatedVmHostIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExtendedMetadataInput`<sup>Optional</sup> <a name="ExtendedMetadataInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendedMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput"></a>

```csharp
public string FaultDomainInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput"></a>

```csharp
public string HostnameLabelInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `InstanceConfigurationIdInput`<sup>Optional</sup> <a name="InstanceConfigurationIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput"></a>

```csharp
public string InstanceConfigurationIdInput { get; }
```

- *Type:* string

---

##### `InstanceOptionsInput`<sup>Optional</sup> <a name="InstanceOptionsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput"></a>

```csharp
public CoreInstanceInstanceOptions InstanceOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `IpxeScriptInput`<sup>Optional</sup> <a name="IpxeScriptInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput"></a>

```csharp
public string IpxeScriptInput { get; }
```

- *Type:* string

---

##### `IsPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput"></a>

```csharp
public object IsPvEncryptionInTransitEnabledInput { get; }
```

- *Type:* object

---

##### `LaunchOptionsInput`<sup>Optional</sup> <a name="LaunchOptionsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput"></a>

```csharp
public CoreInstanceLaunchOptions LaunchOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `LaunchVolumeAttachmentsInput`<sup>Optional</sup> <a name="LaunchVolumeAttachmentsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput"></a>

```csharp
public object LaunchVolumeAttachmentsInput { get; }
```

- *Type:* object

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PlatformConfigInput`<sup>Optional</sup> <a name="PlatformConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput"></a>

```csharp
public CoreInstancePlatformConfig PlatformConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `PreemptibleInstanceConfigInput`<sup>Optional</sup> <a name="PreemptibleInstanceConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput"></a>

```csharp
public CoreInstancePreemptibleInstanceConfig PreemptibleInstanceConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `PreserveBootVolumeInput`<sup>Optional</sup> <a name="PreserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput"></a>

```csharp
public object PreserveBootVolumeInput { get; }
```

- *Type:* object

---

##### `PreserveDataVolumesCreatedAtLaunchInput`<sup>Optional</sup> <a name="PreserveDataVolumesCreatedAtLaunchInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput"></a>

```csharp
public object PreserveDataVolumesCreatedAtLaunchInput { get; }
```

- *Type:* object

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput"></a>

```csharp
public CoreInstanceShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SourceDetailsInput`<sup>Optional</sup> <a name="SourceDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput"></a>

```csharp
public CoreInstanceSourceDetails SourceDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpdateOperationConstraintInput`<sup>Optional</sup> <a name="UpdateOperationConstraintInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput"></a>

```csharp
public string UpdateOperationConstraintInput { get; }
```

- *Type:* string

---

##### `Async`<sup>Required</sup> <a name="Async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async"></a>

```csharp
public object Async { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId"></a>

```csharp
public string ClusterPlacementGroupId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; }
```

- *Type:* string

---

##### `DedicatedVmHostId`<sup>Required</sup> <a name="DedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId"></a>

```csharp
public string DedicatedVmHostId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExtendedMetadata`<sup>Required</sup> <a name="ExtendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendedMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InstanceConfigurationId`<sup>Required</sup> <a name="InstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId"></a>

```csharp
public string InstanceConfigurationId { get; }
```

- *Type:* string

---

##### `IpxeScript`<sup>Required</sup> <a name="IpxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript"></a>

```csharp
public string IpxeScript { get; }
```

- *Type:* string

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled"></a>

```csharp
public object IsPvEncryptionInTransitEnabled { get; }
```

- *Type:* object

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PreserveBootVolume`<sup>Required</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume"></a>

```csharp
public object PreserveBootVolume { get; }
```

- *Type:* object

---

##### `PreserveDataVolumesCreatedAtLaunch`<sup>Required</sup> <a name="PreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch"></a>

```csharp
public object PreserveDataVolumesCreatedAtLaunch { get; }
```

- *Type:* object

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `UpdateOperationConstraint`<sup>Required</sup> <a name="UpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint"></a>

```csharp
public string UpdateOperationConstraint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceAgentConfig <a name="CoreInstanceAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceAgentConfig {
    object AreAllPluginsDisabled = null,
    object IsManagementDisabled = null,
    object IsMonitoringDisabled = null,
    object PluginsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled">AreAllPluginsDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled">IsManagementDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled">IsMonitoringDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig">PluginsConfig</a></code> | <code>object</code> | plugins_config block. |

---

##### `AreAllPluginsDisabled`<sup>Optional</sup> <a name="AreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled"></a>

```csharp
public object AreAllPluginsDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}.

---

##### `IsManagementDisabled`<sup>Optional</sup> <a name="IsManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled"></a>

```csharp
public object IsManagementDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}.

---

##### `IsMonitoringDisabled`<sup>Optional</sup> <a name="IsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled"></a>

```csharp
public object IsMonitoringDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}.

---

##### `PluginsConfig`<sup>Optional</sup> <a name="PluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig"></a>

```csharp
public object PluginsConfig { get; set; }
```

- *Type:* object

plugins_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#plugins_config CoreInstance#plugins_config}

---

### CoreInstanceAgentConfigPluginsConfig <a name="CoreInstanceAgentConfigPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceAgentConfigPluginsConfig {
    string DesiredState,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState">DesiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}. |

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}.

---

### CoreInstanceAvailabilityConfig <a name="CoreInstanceAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceAvailabilityConfig {
    object IsLiveMigrationPreferred = null,
    string RecoveryAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred">IsLiveMigrationPreferred</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction">RecoveryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}. |

---

##### `IsLiveMigrationPreferred`<sup>Optional</sup> <a name="IsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred"></a>

```csharp
public object IsLiveMigrationPreferred { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}.

---

##### `RecoveryAction`<sup>Optional</sup> <a name="RecoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction"></a>

```csharp
public string RecoveryAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}.

---

### CoreInstanceConfig <a name="CoreInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    CoreInstanceAgentConfig AgentConfig = null,
    object Async = null,
    CoreInstanceAvailabilityConfig AvailabilityConfig = null,
    string CapacityReservationId = null,
    string ClusterPlacementGroupId = null,
    string ComputeClusterId = null,
    CoreInstanceCreateVnicDetails CreateVnicDetails = null,
    string DedicatedVmHostId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> ExtendedMetadata = null,
    string FaultDomain = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string HostnameLabel = null,
    string Id = null,
    string Image = null,
    string InstanceConfigurationId = null,
    CoreInstanceInstanceOptions InstanceOptions = null,
    string IpxeScript = null,
    object IsPvEncryptionInTransitEnabled = null,
    CoreInstanceLaunchOptions LaunchOptions = null,
    object LaunchVolumeAttachments = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    CoreInstancePlatformConfig PlatformConfig = null,
    CoreInstancePreemptibleInstanceConfig PreemptibleInstanceConfig = null,
    object PreserveBootVolume = null,
    object PreserveDataVolumesCreatedAtLaunch = null,
    System.Collections.Generic.IDictionary<string, string> SecurityAttributes = null,
    string Shape = null,
    CoreInstanceShapeConfig ShapeConfig = null,
    CoreInstanceSourceDetails SourceDetails = null,
    string State = null,
    string SubnetId = null,
    CoreInstanceTimeouts Timeouts = null,
    string UpdateOperationConstraint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig">AgentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | agent_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async">Async</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig">AvailabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | availability_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails">CreateVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId">DedicatedVmHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata">ExtendedMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain">FaultDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId">InstanceConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions">InstanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | instance_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript">IpxeScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions">LaunchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | launch_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments">LaunchVolumeAttachments</a></code> | <code>object</code> | launch_volume_attachments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig">PlatformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | platform_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig">PreemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | preemptible_instance_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch">PreserveDataVolumesCreatedAtLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint">UpdateOperationConstraint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `AgentConfig`<sup>Optional</sup> <a name="AgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig"></a>

```csharp
public CoreInstanceAgentConfig AgentConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

agent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#agent_config CoreInstance#agent_config}

---

##### `Async`<sup>Optional</sup> <a name="Async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async"></a>

```csharp
public object Async { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}.

---

##### `AvailabilityConfig`<sup>Optional</sup> <a name="AvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig"></a>

```csharp
public CoreInstanceAvailabilityConfig AvailabilityConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_config CoreInstance#availability_config}

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}.

---

##### `ClusterPlacementGroupId`<sup>Optional</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId"></a>

```csharp
public string ClusterPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}.

---

##### `ComputeClusterId`<sup>Optional</sup> <a name="ComputeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId"></a>

```csharp
public string ComputeClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}.

---

##### `CreateVnicDetails`<sup>Optional</sup> <a name="CreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails"></a>

```csharp
public CoreInstanceCreateVnicDetails CreateVnicDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create_vnic_details CoreInstance#create_vnic_details}

---

##### `DedicatedVmHostId`<sup>Optional</sup> <a name="DedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId"></a>

```csharp
public string DedicatedVmHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `ExtendedMetadata`<sup>Optional</sup> <a name="ExtendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtendedMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}.

---

##### `FaultDomain`<sup>Optional</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain"></a>

```csharp
public string FaultDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}.

---

##### `InstanceConfigurationId`<sup>Optional</sup> <a name="InstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId"></a>

```csharp
public string InstanceConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}.

---

##### `InstanceOptions`<sup>Optional</sup> <a name="InstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions"></a>

```csharp
public CoreInstanceInstanceOptions InstanceOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

instance_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_options CoreInstance#instance_options}

---

##### `IpxeScript`<sup>Optional</sup> <a name="IpxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript"></a>

```csharp
public string IpxeScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}.

---

##### `IsPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled"></a>

```csharp
public object IsPvEncryptionInTransitEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `LaunchOptions`<sup>Optional</sup> <a name="LaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions"></a>

```csharp
public CoreInstanceLaunchOptions LaunchOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

launch_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_options CoreInstance#launch_options}

---

##### `LaunchVolumeAttachments`<sup>Optional</sup> <a name="LaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments"></a>

```csharp
public object LaunchVolumeAttachments { get; set; }
```

- *Type:* object

launch_volume_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_volume_attachments CoreInstance#launch_volume_attachments}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}.

---

##### `PlatformConfig`<sup>Optional</sup> <a name="PlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig"></a>

```csharp
public CoreInstancePlatformConfig PlatformConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#platform_config CoreInstance#platform_config}

---

##### `PreemptibleInstanceConfig`<sup>Optional</sup> <a name="PreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig"></a>

```csharp
public CoreInstancePreemptibleInstanceConfig PreemptibleInstanceConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

preemptible_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemptible_instance_config CoreInstance#preemptible_instance_config}

---

##### `PreserveBootVolume`<sup>Optional</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume"></a>

```csharp
public object PreserveBootVolume { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

##### `PreserveDataVolumesCreatedAtLaunch`<sup>Optional</sup> <a name="PreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch"></a>

```csharp
public object PreserveDataVolumesCreatedAtLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}.

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig"></a>

```csharp
public CoreInstanceShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape_config CoreInstance#shape_config}

---

##### `SourceDetails`<sup>Optional</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails"></a>

```csharp
public CoreInstanceSourceDetails SourceDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_details CoreInstance#source_details}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts"></a>

```csharp
public CoreInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#timeouts CoreInstance#timeouts}

---

##### `UpdateOperationConstraint`<sup>Optional</sup> <a name="UpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint"></a>

```csharp
public string UpdateOperationConstraint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}.

---

### CoreInstanceCreateVnicDetails <a name="CoreInstanceCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceCreateVnicDetails {
    object AssignIpv6Ip = null,
    object AssignPrivateDnsRecord = null,
    string AssignPublicIp = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string HostnameLabel = null,
    object Ipv6AddressIpv6SubnetCidrPairDetails = null,
    string[] NsgIds = null,
    string PrivateIp = null,
    System.Collections.Generic.IDictionary<string, string> SecurityAttributes = null,
    object SkipSourceDestCheck = null,
    string SubnetId = null,
    string VlanId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip">AssignIpv6Ip</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord">AssignPrivateDnsRecord</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp">AssignPublicIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails">Ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code>object</code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId">VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}. |

---

##### `AssignIpv6Ip`<sup>Optional</sup> <a name="AssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip"></a>

```csharp
public object AssignIpv6Ip { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}.

---

##### `AssignPrivateDnsRecord`<sup>Optional</sup> <a name="AssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord"></a>

```csharp
public object AssignPrivateDnsRecord { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}.

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp"></a>

```csharp
public string AssignPublicIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `Ipv6AddressIpv6SubnetCidrPairDetails`<sup>Optional</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```csharp
public object Ipv6AddressIpv6SubnetCidrPairDetails { get; set; }
```

- *Type:* object

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address_ipv6subnet_cidr_pair_details CoreInstance#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `SkipSourceDestCheck`<sup>Optional</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck"></a>

```csharp
public object SkipSourceDestCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId"></a>

```csharp
public string VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}.

---

### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
    string Ipv6Address = null,
    string Ipv6SubnetCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">Ipv6SubnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}. |

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}.

---

##### `Ipv6SubnetCidr`<sup>Optional</sup> <a name="Ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```csharp
public string Ipv6SubnetCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}.

---

### CoreInstanceInstanceOptions <a name="CoreInstanceInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceInstanceOptions {
    object AreLegacyImdsEndpointsDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled">AreLegacyImdsEndpointsDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}. |

---

##### `AreLegacyImdsEndpointsDisabled`<sup>Optional</sup> <a name="AreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled"></a>

```csharp
public object AreLegacyImdsEndpointsDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}.

---

### CoreInstanceLaunchOptions <a name="CoreInstanceLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceLaunchOptions {
    string BootVolumeType = null,
    string Firmware = null,
    object IsConsistentVolumeNamingEnabled = null,
    object IsPvEncryptionInTransitEnabled = null,
    string NetworkType = null,
    string RemoteDataVolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType">BootVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware">Firmware</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled">IsConsistentVolumeNamingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType">RemoteDataVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}. |

---

##### `BootVolumeType`<sup>Optional</sup> <a name="BootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType"></a>

```csharp
public string BootVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}.

---

##### `Firmware`<sup>Optional</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware"></a>

```csharp
public string Firmware { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}.

---

##### `IsConsistentVolumeNamingEnabled`<sup>Optional</sup> <a name="IsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled"></a>

```csharp
public object IsConsistentVolumeNamingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}.

---

##### `IsPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled"></a>

```csharp
public object IsPvEncryptionInTransitEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}.

---

##### `RemoteDataVolumeType`<sup>Optional</sup> <a name="RemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType"></a>

```csharp
public string RemoteDataVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}.

---

### CoreInstanceLaunchVolumeAttachments <a name="CoreInstanceLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceLaunchVolumeAttachments {
    string Type,
    string Device = null,
    string DisplayName = null,
    string EncryptionInTransitType = null,
    object IsAgentAutoIscsiLoginEnabled = null,
    object IsPvEncryptionInTransitEnabled = null,
    object IsReadOnly = null,
    object IsShareable = null,
    CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails LaunchCreateVolumeDetails = null,
    object UseChap = null,
    string VolumeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device">Device</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType">EncryptionInTransitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled">IsAgentAutoIscsiLoginEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly">IsReadOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable">IsShareable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails">LaunchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | launch_create_volume_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap">UseChap</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId">VolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `Device`<sup>Optional</sup> <a name="Device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device"></a>

```csharp
public string Device { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `EncryptionInTransitType`<sup>Optional</sup> <a name="EncryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType"></a>

```csharp
public string EncryptionInTransitType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}.

---

##### `IsAgentAutoIscsiLoginEnabled`<sup>Optional</sup> <a name="IsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled"></a>

```csharp
public object IsAgentAutoIscsiLoginEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}.

---

##### `IsPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled"></a>

```csharp
public object IsPvEncryptionInTransitEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `IsReadOnly`<sup>Optional</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly"></a>

```csharp
public object IsReadOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}.

---

##### `IsShareable`<sup>Optional</sup> <a name="IsShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable"></a>

```csharp
public object IsShareable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}.

---

##### `LaunchCreateVolumeDetails`<sup>Optional</sup> <a name="LaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails"></a>

```csharp
public CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails LaunchCreateVolumeDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

launch_create_volume_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_create_volume_details CoreInstance#launch_create_volume_details}

---

##### `UseChap`<sup>Optional</sup> <a name="UseChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap"></a>

```csharp
public object UseChap { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}.

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}.

---

### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails {
    string SizeInGbs,
    string VolumeCreationType,
    string CompartmentId = null,
    string DisplayName = null,
    string KmsKeyId = null,
    string VpusPerGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs">SizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType">VolumeCreationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb">VpusPerGb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}. |

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs"></a>

```csharp
public string SizeInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}.

---

##### `VolumeCreationType`<sup>Required</sup> <a name="VolumeCreationType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType"></a>

```csharp
public string VolumeCreationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `VpusPerGb`<sup>Optional</sup> <a name="VpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb"></a>

```csharp
public string VpusPerGb { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}.

---

### CoreInstancePlatformConfig <a name="CoreInstancePlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstancePlatformConfig {
    string Type,
    object AreVirtualInstructionsEnabled = null,
    System.Collections.Generic.IDictionary<string, string> ConfigMap = null,
    object IsAccessControlServiceEnabled = null,
    object IsInputOutputMemoryManagementUnitEnabled = null,
    object IsMeasuredBootEnabled = null,
    object IsMemoryEncryptionEnabled = null,
    object IsSecureBootEnabled = null,
    object IsSymmetricMultiThreadingEnabled = null,
    object IsTrustedPlatformModuleEnabled = null,
    string NumaNodesPerSocket = null,
    double PercentageOfCoresEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled">AreVirtualInstructionsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap">ConfigMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled">IsAccessControlServiceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled">IsInputOutputMemoryManagementUnitEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled">IsMeasuredBootEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled">IsMemoryEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled">IsSecureBootEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled">IsSymmetricMultiThreadingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled">IsTrustedPlatformModuleEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket">NumaNodesPerSocket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled">PercentageOfCoresEnabled</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `AreVirtualInstructionsEnabled`<sup>Optional</sup> <a name="AreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled"></a>

```csharp
public object AreVirtualInstructionsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}.

---

##### `ConfigMap`<sup>Optional</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}.

---

##### `IsAccessControlServiceEnabled`<sup>Optional</sup> <a name="IsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled"></a>

```csharp
public object IsAccessControlServiceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}.

---

##### `IsInputOutputMemoryManagementUnitEnabled`<sup>Optional</sup> <a name="IsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled"></a>

```csharp
public object IsInputOutputMemoryManagementUnitEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}.

---

##### `IsMeasuredBootEnabled`<sup>Optional</sup> <a name="IsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled"></a>

```csharp
public object IsMeasuredBootEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}.

---

##### `IsMemoryEncryptionEnabled`<sup>Optional</sup> <a name="IsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled"></a>

```csharp
public object IsMemoryEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}.

---

##### `IsSecureBootEnabled`<sup>Optional</sup> <a name="IsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled"></a>

```csharp
public object IsSecureBootEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}.

---

##### `IsSymmetricMultiThreadingEnabled`<sup>Optional</sup> <a name="IsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled"></a>

```csharp
public object IsSymmetricMultiThreadingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}.

---

##### `IsTrustedPlatformModuleEnabled`<sup>Optional</sup> <a name="IsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled"></a>

```csharp
public object IsTrustedPlatformModuleEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}.

---

##### `NumaNodesPerSocket`<sup>Optional</sup> <a name="NumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket"></a>

```csharp
public string NumaNodesPerSocket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}.

---

##### `PercentageOfCoresEnabled`<sup>Optional</sup> <a name="PercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled"></a>

```csharp
public double PercentageOfCoresEnabled { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}.

---

### CoreInstancePreemptibleInstanceConfig <a name="CoreInstancePreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstancePreemptibleInstanceConfig {
    CoreInstancePreemptibleInstanceConfigPreemptionAction PreemptionAction
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | preemption_action block. |

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction"></a>

```csharp
public CoreInstancePreemptibleInstanceConfigPreemptionAction PreemptionAction { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemption_action CoreInstance#preemption_action}

---

### CoreInstancePreemptibleInstanceConfigPreemptionAction <a name="CoreInstancePreemptibleInstanceConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstancePreemptibleInstanceConfigPreemptionAction {
    string Type,
    object PreserveBootVolume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `PreserveBootVolume`<sup>Optional</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume"></a>

```csharp
public object PreserveBootVolume { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

### CoreInstanceShapeConfig <a name="CoreInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceShapeConfig {
    string BaselineOcpuUtilization = null,
    double MemoryInGbs = null,
    double Nvmes = null,
    double Ocpus = null,
    double Vcpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes">Nvmes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus">Vcpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}. |

---

##### `BaselineOcpuUtilization`<sup>Optional</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization"></a>

```csharp
public string BaselineOcpuUtilization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}.

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}.

---

##### `Nvmes`<sup>Optional</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes"></a>

```csharp
public double Nvmes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}.

---

##### `Vcpus`<sup>Optional</sup> <a name="Vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus"></a>

```csharp
public double Vcpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}.

---

### CoreInstanceSourceDetails <a name="CoreInstanceSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceSourceDetails {
    string SourceType,
    string BootVolumeSizeInGbs = null,
    string BootVolumeVpusPerGb = null,
    CoreInstanceSourceDetailsInstanceSourceImageFilterDetails InstanceSourceImageFilterDetails = null,
    object IsPreserveBootVolumeEnabled = null,
    string KmsKeyId = null,
    string SourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb">BootVolumeVpusPerGb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails">InstanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | instance_source_image_filter_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled">IsPreserveBootVolumeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId">SourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}.

---

##### `BootVolumeSizeInGbs`<sup>Optional</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs"></a>

```csharp
public string BootVolumeSizeInGbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}.

---

##### `BootVolumeVpusPerGb`<sup>Optional</sup> <a name="BootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb"></a>

```csharp
public string BootVolumeVpusPerGb { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}.

---

##### `InstanceSourceImageFilterDetails`<sup>Optional</sup> <a name="InstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails"></a>

```csharp
public CoreInstanceSourceDetailsInstanceSourceImageFilterDetails InstanceSourceImageFilterDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

instance_source_image_filter_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_source_image_filter_details CoreInstance#instance_source_image_filter_details}

---

##### `IsPreserveBootVolumeEnabled`<sup>Optional</sup> <a name="IsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled"></a>

```csharp
public object IsPreserveBootVolumeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId"></a>

```csharp
public string SourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}.

---

### CoreInstanceSourceDetailsInstanceSourceImageFilterDetails <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceSourceDetailsInstanceSourceImageFilterDetails {
    string CompartmentId,
    System.Collections.Generic.IDictionary<string, string> DefinedTagsFilter = null,
    string OperatingSystem = null,
    string OperatingSystemVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter">DefinedTagsFilter</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `DefinedTagsFilter`<sup>Optional</sup> <a name="DefinedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsFilter { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}.

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}.

---

##### `OperatingSystemVersion`<sup>Optional</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion"></a>

```csharp
public string OperatingSystemVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}.

---

### CoreInstanceTimeouts <a name="CoreInstanceTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceAgentConfigOutputReference <a name="CoreInstanceAgentConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceAgentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig">PutPluginsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled">ResetAreAllPluginsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled">ResetIsManagementDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled">ResetIsMonitoringDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig">ResetPluginsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPluginsConfig` <a name="PutPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig"></a>

```csharp
private void PutPluginsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAreAllPluginsDisabled` <a name="ResetAreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled"></a>

```csharp
private void ResetAreAllPluginsDisabled()
```

##### `ResetIsManagementDisabled` <a name="ResetIsManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled"></a>

```csharp
private void ResetIsManagementDisabled()
```

##### `ResetIsMonitoringDisabled` <a name="ResetIsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled"></a>

```csharp
private void ResetIsMonitoringDisabled()
```

##### `ResetPluginsConfig` <a name="ResetPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig"></a>

```csharp
private void ResetPluginsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig">PluginsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput">AreAllPluginsDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput">IsManagementDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput">IsMonitoringDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput">PluginsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled">AreAllPluginsDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled">IsManagementDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled">IsMonitoringDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PluginsConfig`<sup>Required</sup> <a name="PluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig"></a>

```csharp
public CoreInstanceAgentConfigPluginsConfigList PluginsConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a>

---

##### `AreAllPluginsDisabledInput`<sup>Optional</sup> <a name="AreAllPluginsDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput"></a>

```csharp
public object AreAllPluginsDisabledInput { get; }
```

- *Type:* object

---

##### `IsManagementDisabledInput`<sup>Optional</sup> <a name="IsManagementDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput"></a>

```csharp
public object IsManagementDisabledInput { get; }
```

- *Type:* object

---

##### `IsMonitoringDisabledInput`<sup>Optional</sup> <a name="IsMonitoringDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput"></a>

```csharp
public object IsMonitoringDisabledInput { get; }
```

- *Type:* object

---

##### `PluginsConfigInput`<sup>Optional</sup> <a name="PluginsConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput"></a>

```csharp
public object PluginsConfigInput { get; }
```

- *Type:* object

---

##### `AreAllPluginsDisabled`<sup>Required</sup> <a name="AreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled"></a>

```csharp
public object AreAllPluginsDisabled { get; }
```

- *Type:* object

---

##### `IsManagementDisabled`<sup>Required</sup> <a name="IsManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled"></a>

```csharp
public object IsManagementDisabled { get; }
```

- *Type:* object

---

##### `IsMonitoringDisabled`<sup>Required</sup> <a name="IsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled"></a>

```csharp
public object IsMonitoringDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceAgentConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---


### CoreInstanceAgentConfigPluginsConfigList <a name="CoreInstanceAgentConfigPluginsConfigList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceAgentConfigPluginsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get"></a>

```csharp
private CoreInstanceAgentConfigPluginsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreInstanceAgentConfigPluginsConfigOutputReference <a name="CoreInstanceAgentConfigPluginsConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceAgentConfigPluginsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreInstanceAvailabilityConfigOutputReference <a name="CoreInstanceAvailabilityConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceAvailabilityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred">ResetIsLiveMigrationPreferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction">ResetRecoveryAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsLiveMigrationPreferred` <a name="ResetIsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred"></a>

```csharp
private void ResetIsLiveMigrationPreferred()
```

##### `ResetRecoveryAction` <a name="ResetRecoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction"></a>

```csharp
private void ResetRecoveryAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput">IsLiveMigrationPreferredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput">RecoveryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred">IsLiveMigrationPreferred</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction">RecoveryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsLiveMigrationPreferredInput`<sup>Optional</sup> <a name="IsLiveMigrationPreferredInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput"></a>

```csharp
public object IsLiveMigrationPreferredInput { get; }
```

- *Type:* object

---

##### `RecoveryActionInput`<sup>Optional</sup> <a name="RecoveryActionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput"></a>

```csharp
public string RecoveryActionInput { get; }
```

- *Type:* string

---

##### `IsLiveMigrationPreferred`<sup>Required</sup> <a name="IsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred"></a>

```csharp
public object IsLiveMigrationPreferred { get; }
```

- *Type:* object

---

##### `RecoveryAction`<sup>Required</sup> <a name="RecoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction"></a>

```csharp
public string RecoveryAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceAvailabilityConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```csharp
private CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">ResetIpv6SubnetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetIpv6SubnetCidr` <a name="ResetIpv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```csharp
private void ResetIpv6SubnetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">Ipv6SubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">Ipv6SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6SubnetCidrInput`<sup>Optional</sup> <a name="Ipv6SubnetCidrInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```csharp
public string Ipv6SubnetCidrInput { get; }
```

- *Type:* string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Ipv6SubnetCidr`<sup>Required</sup> <a name="Ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```csharp
public string Ipv6SubnetCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreInstanceCreateVnicDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceCreateVnicDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">PutIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip">ResetAssignIpv6Ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord">ResetAssignPrivateDnsRecord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">ResetIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck">ResetSkipSourceDestCheck</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv6AddressIpv6SubnetCidrPairDetails` <a name="PutIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```csharp
private void PutIpv6AddressIpv6SubnetCidrPairDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* object

---

##### `ResetAssignIpv6Ip` <a name="ResetAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip"></a>

```csharp
private void ResetAssignIpv6Ip()
```

##### `ResetAssignPrivateDnsRecord` <a name="ResetAssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord"></a>

```csharp
private void ResetAssignPrivateDnsRecord()
```

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp"></a>

```csharp
private void ResetAssignPublicIp()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel"></a>

```csharp
private void ResetHostnameLabel()
```

##### `ResetIpv6AddressIpv6SubnetCidrPairDetails` <a name="ResetIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```csharp
private void ResetIpv6AddressIpv6SubnetCidrPairDetails()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes"></a>

```csharp
private void ResetSecurityAttributes()
```

##### `ResetSkipSourceDestCheck` <a name="ResetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck"></a>

```csharp
private void ResetSkipSourceDestCheck()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId"></a>

```csharp
private void ResetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">Ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput">AssignIpv6IpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput">AssignPrivateDnsRecordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">Ipv6AddressIpv6SubnetCidrPairDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput">SkipSourceDestCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip">AssignIpv6Ip</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">AssignPrivateDnsRecord</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```csharp
public CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList Ipv6AddressIpv6SubnetCidrPairDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `AssignIpv6IpInput`<sup>Optional</sup> <a name="AssignIpv6IpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput"></a>

```csharp
public object AssignIpv6IpInput { get; }
```

- *Type:* object

---

##### `AssignPrivateDnsRecordInput`<sup>Optional</sup> <a name="AssignPrivateDnsRecordInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput"></a>

```csharp
public object AssignPrivateDnsRecordInput { get; }
```

- *Type:* object

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput"></a>

```csharp
public string AssignPublicIpInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput"></a>

```csharp
public string HostnameLabelInput { get; }
```

- *Type:* string

---

##### `Ipv6AddressIpv6SubnetCidrPairDetailsInput`<sup>Optional</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```csharp
public object Ipv6AddressIpv6SubnetCidrPairDetailsInput { get; }
```

- *Type:* object

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SkipSourceDestCheckInput`<sup>Optional</sup> <a name="SkipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput"></a>

```csharp
public object SkipSourceDestCheckInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput"></a>

```csharp
public string VlanIdInput { get; }
```

- *Type:* string

---

##### `AssignIpv6Ip`<sup>Required</sup> <a name="AssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```csharp
public object AssignIpv6Ip { get; }
```

- *Type:* object

---

##### `AssignPrivateDnsRecord`<sup>Required</sup> <a name="AssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```csharp
public object AssignPrivateDnsRecord { get; }
```

- *Type:* object

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```csharp
public string AssignPublicIp { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```csharp
public object SkipSourceDestCheck { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceCreateVnicDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---


### CoreInstanceInstanceOptionsOutputReference <a name="CoreInstanceInstanceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceInstanceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled">ResetAreLegacyImdsEndpointsDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAreLegacyImdsEndpointsDisabled` <a name="ResetAreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled"></a>

```csharp
private void ResetAreLegacyImdsEndpointsDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput">AreLegacyImdsEndpointsDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled">AreLegacyImdsEndpointsDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AreLegacyImdsEndpointsDisabledInput`<sup>Optional</sup> <a name="AreLegacyImdsEndpointsDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput"></a>

```csharp
public object AreLegacyImdsEndpointsDisabledInput { get; }
```

- *Type:* object

---

##### `AreLegacyImdsEndpointsDisabled`<sup>Required</sup> <a name="AreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled"></a>

```csharp
public object AreLegacyImdsEndpointsDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceInstanceOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---


### CoreInstanceLaunchOptionsOutputReference <a name="CoreInstanceLaunchOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceLaunchOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType">ResetBootVolumeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware">ResetFirmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled">ResetIsConsistentVolumeNamingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled">ResetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType">ResetRemoteDataVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootVolumeType` <a name="ResetBootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType"></a>

```csharp
private void ResetBootVolumeType()
```

##### `ResetFirmware` <a name="ResetFirmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware"></a>

```csharp
private void ResetFirmware()
```

##### `ResetIsConsistentVolumeNamingEnabled` <a name="ResetIsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled"></a>

```csharp
private void ResetIsConsistentVolumeNamingEnabled()
```

##### `ResetIsPvEncryptionInTransitEnabled` <a name="ResetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```csharp
private void ResetIsPvEncryptionInTransitEnabled()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetRemoteDataVolumeType` <a name="ResetRemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType"></a>

```csharp
private void ResetRemoteDataVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput">BootVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput">FirmwareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput">IsConsistentVolumeNamingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput">IsPvEncryptionInTransitEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput">RemoteDataVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType">BootVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware">Firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled">IsConsistentVolumeNamingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType">RemoteDataVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootVolumeTypeInput`<sup>Optional</sup> <a name="BootVolumeTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput"></a>

```csharp
public string BootVolumeTypeInput { get; }
```

- *Type:* string

---

##### `FirmwareInput`<sup>Optional</sup> <a name="FirmwareInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput"></a>

```csharp
public string FirmwareInput { get; }
```

- *Type:* string

---

##### `IsConsistentVolumeNamingEnabledInput`<sup>Optional</sup> <a name="IsConsistentVolumeNamingEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput"></a>

```csharp
public object IsConsistentVolumeNamingEnabledInput { get; }
```

- *Type:* object

---

##### `IsPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```csharp
public object IsPvEncryptionInTransitEnabledInput { get; }
```

- *Type:* object

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `RemoteDataVolumeTypeInput`<sup>Optional</sup> <a name="RemoteDataVolumeTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput"></a>

```csharp
public string RemoteDataVolumeTypeInput { get; }
```

- *Type:* string

---

##### `BootVolumeType`<sup>Required</sup> <a name="BootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType"></a>

```csharp
public string BootVolumeType { get; }
```

- *Type:* string

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware"></a>

```csharp
public string Firmware { get; }
```

- *Type:* string

---

##### `IsConsistentVolumeNamingEnabled`<sup>Required</sup> <a name="IsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled"></a>

```csharp
public object IsConsistentVolumeNamingEnabled { get; }
```

- *Type:* object

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```csharp
public object IsPvEncryptionInTransitEnabled { get; }
```

- *Type:* object

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `RemoteDataVolumeType`<sup>Required</sup> <a name="RemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType"></a>

```csharp
public string RemoteDataVolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceLaunchOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---


### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb">ResetVpusPerGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetVpusPerGb` <a name="ResetVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb"></a>

```csharp
private void ResetVpusPerGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput">SizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput">VolumeCreationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput">VpusPerGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs">SizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType">VolumeCreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb">VpusPerGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SizeInGbsInput`<sup>Optional</sup> <a name="SizeInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput"></a>

```csharp
public string SizeInGbsInput { get; }
```

- *Type:* string

---

##### `VolumeCreationTypeInput`<sup>Optional</sup> <a name="VolumeCreationTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput"></a>

```csharp
public string VolumeCreationTypeInput { get; }
```

- *Type:* string

---

##### `VpusPerGbInput`<sup>Optional</sup> <a name="VpusPerGbInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput"></a>

```csharp
public string VpusPerGbInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs"></a>

```csharp
public string SizeInGbs { get; }
```

- *Type:* string

---

##### `VolumeCreationType`<sup>Required</sup> <a name="VolumeCreationType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType"></a>

```csharp
public string VolumeCreationType { get; }
```

- *Type:* string

---

##### `VpusPerGb`<sup>Required</sup> <a name="VpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb"></a>

```csharp
public string VpusPerGb { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---


### CoreInstanceLaunchVolumeAttachmentsList <a name="CoreInstanceLaunchVolumeAttachmentsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceLaunchVolumeAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get"></a>

```csharp
private CoreInstanceLaunchVolumeAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreInstanceLaunchVolumeAttachmentsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceLaunchVolumeAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails">PutLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice">ResetDevice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType">ResetEncryptionInTransitType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled">ResetIsAgentAutoIscsiLoginEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled">ResetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly">ResetIsReadOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable">ResetIsShareable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails">ResetLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap">ResetUseChap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchCreateVolumeDetails` <a name="PutLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails"></a>

```csharp
private void PutLaunchCreateVolumeDetails(CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `ResetDevice` <a name="ResetDevice" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice"></a>

```csharp
private void ResetDevice()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEncryptionInTransitType` <a name="ResetEncryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType"></a>

```csharp
private void ResetEncryptionInTransitType()
```

##### `ResetIsAgentAutoIscsiLoginEnabled` <a name="ResetIsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled"></a>

```csharp
private void ResetIsAgentAutoIscsiLoginEnabled()
```

##### `ResetIsPvEncryptionInTransitEnabled` <a name="ResetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```csharp
private void ResetIsPvEncryptionInTransitEnabled()
```

##### `ResetIsReadOnly` <a name="ResetIsReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly"></a>

```csharp
private void ResetIsReadOnly()
```

##### `ResetIsShareable` <a name="ResetIsShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable"></a>

```csharp
private void ResetIsShareable()
```

##### `ResetLaunchCreateVolumeDetails` <a name="ResetLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails"></a>

```csharp
private void ResetLaunchCreateVolumeDetails()
```

##### `ResetUseChap` <a name="ResetUseChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap"></a>

```csharp
private void ResetUseChap()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId"></a>

```csharp
private void ResetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails">LaunchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput">DeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput">EncryptionInTransitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput">IsAgentAutoIscsiLoginEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput">IsPvEncryptionInTransitEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput">IsReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput">IsShareableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput">LaunchCreateVolumeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput">UseChapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device">Device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType">EncryptionInTransitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled">IsAgentAutoIscsiLoginEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable">IsShareable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap">UseChap</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchCreateVolumeDetails`<sup>Required</sup> <a name="LaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails"></a>

```csharp
public CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference LaunchCreateVolumeDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a>

---

##### `DeviceInput`<sup>Optional</sup> <a name="DeviceInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput"></a>

```csharp
public string DeviceInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionInTransitTypeInput`<sup>Optional</sup> <a name="EncryptionInTransitTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput"></a>

```csharp
public string EncryptionInTransitTypeInput { get; }
```

- *Type:* string

---

##### `IsAgentAutoIscsiLoginEnabledInput`<sup>Optional</sup> <a name="IsAgentAutoIscsiLoginEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput"></a>

```csharp
public object IsAgentAutoIscsiLoginEnabledInput { get; }
```

- *Type:* object

---

##### `IsPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```csharp
public object IsPvEncryptionInTransitEnabledInput { get; }
```

- *Type:* object

---

##### `IsReadOnlyInput`<sup>Optional</sup> <a name="IsReadOnlyInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput"></a>

```csharp
public object IsReadOnlyInput { get; }
```

- *Type:* object

---

##### `IsShareableInput`<sup>Optional</sup> <a name="IsShareableInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput"></a>

```csharp
public object IsShareableInput { get; }
```

- *Type:* object

---

##### `LaunchCreateVolumeDetailsInput`<sup>Optional</sup> <a name="LaunchCreateVolumeDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput"></a>

```csharp
public CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails LaunchCreateVolumeDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UseChapInput`<sup>Optional</sup> <a name="UseChapInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput"></a>

```csharp
public object UseChapInput { get; }
```

- *Type:* object

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `Device`<sup>Required</sup> <a name="Device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device"></a>

```csharp
public string Device { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EncryptionInTransitType`<sup>Required</sup> <a name="EncryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType"></a>

```csharp
public string EncryptionInTransitType { get; }
```

- *Type:* string

---

##### `IsAgentAutoIscsiLoginEnabled`<sup>Required</sup> <a name="IsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled"></a>

```csharp
public object IsAgentAutoIscsiLoginEnabled { get; }
```

- *Type:* object

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```csharp
public object IsPvEncryptionInTransitEnabled { get; }
```

- *Type:* object

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly"></a>

```csharp
public object IsReadOnly { get; }
```

- *Type:* object

---

##### `IsShareable`<sup>Required</sup> <a name="IsShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable"></a>

```csharp
public object IsShareable { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UseChap`<sup>Required</sup> <a name="UseChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap"></a>

```csharp
public object UseChap { get; }
```

- *Type:* object

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreInstancePlatformConfigOutputReference <a name="CoreInstancePlatformConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstancePlatformConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled">ResetAreVirtualInstructionsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap">ResetConfigMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled">ResetIsAccessControlServiceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled">ResetIsInputOutputMemoryManagementUnitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled">ResetIsMeasuredBootEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled">ResetIsMemoryEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled">ResetIsSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled">ResetIsSymmetricMultiThreadingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled">ResetIsTrustedPlatformModuleEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket">ResetNumaNodesPerSocket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled">ResetPercentageOfCoresEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAreVirtualInstructionsEnabled` <a name="ResetAreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled"></a>

```csharp
private void ResetAreVirtualInstructionsEnabled()
```

##### `ResetConfigMap` <a name="ResetConfigMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap"></a>

```csharp
private void ResetConfigMap()
```

##### `ResetIsAccessControlServiceEnabled` <a name="ResetIsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled"></a>

```csharp
private void ResetIsAccessControlServiceEnabled()
```

##### `ResetIsInputOutputMemoryManagementUnitEnabled` <a name="ResetIsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled"></a>

```csharp
private void ResetIsInputOutputMemoryManagementUnitEnabled()
```

##### `ResetIsMeasuredBootEnabled` <a name="ResetIsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled"></a>

```csharp
private void ResetIsMeasuredBootEnabled()
```

##### `ResetIsMemoryEncryptionEnabled` <a name="ResetIsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled"></a>

```csharp
private void ResetIsMemoryEncryptionEnabled()
```

##### `ResetIsSecureBootEnabled` <a name="ResetIsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled"></a>

```csharp
private void ResetIsSecureBootEnabled()
```

##### `ResetIsSymmetricMultiThreadingEnabled` <a name="ResetIsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled"></a>

```csharp
private void ResetIsSymmetricMultiThreadingEnabled()
```

##### `ResetIsTrustedPlatformModuleEnabled` <a name="ResetIsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled"></a>

```csharp
private void ResetIsTrustedPlatformModuleEnabled()
```

##### `ResetNumaNodesPerSocket` <a name="ResetNumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket"></a>

```csharp
private void ResetNumaNodesPerSocket()
```

##### `ResetPercentageOfCoresEnabled` <a name="ResetPercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled"></a>

```csharp
private void ResetPercentageOfCoresEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput">AreVirtualInstructionsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput">ConfigMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput">IsAccessControlServiceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput">IsInputOutputMemoryManagementUnitEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput">IsMeasuredBootEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput">IsMemoryEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput">IsSecureBootEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput">IsSymmetricMultiThreadingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput">IsTrustedPlatformModuleEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput">NumaNodesPerSocketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput">PercentageOfCoresEnabledInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled">AreVirtualInstructionsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap">ConfigMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled">IsAccessControlServiceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled">IsInputOutputMemoryManagementUnitEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled">IsMeasuredBootEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled">IsMemoryEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled">IsSecureBootEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled">IsSymmetricMultiThreadingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled">IsTrustedPlatformModuleEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket">NumaNodesPerSocket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled">PercentageOfCoresEnabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AreVirtualInstructionsEnabledInput`<sup>Optional</sup> <a name="AreVirtualInstructionsEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput"></a>

```csharp
public object AreVirtualInstructionsEnabledInput { get; }
```

- *Type:* object

---

##### `ConfigMapInput`<sup>Optional</sup> <a name="ConfigMapInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IsAccessControlServiceEnabledInput`<sup>Optional</sup> <a name="IsAccessControlServiceEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput"></a>

```csharp
public object IsAccessControlServiceEnabledInput { get; }
```

- *Type:* object

---

##### `IsInputOutputMemoryManagementUnitEnabledInput`<sup>Optional</sup> <a name="IsInputOutputMemoryManagementUnitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput"></a>

```csharp
public object IsInputOutputMemoryManagementUnitEnabledInput { get; }
```

- *Type:* object

---

##### `IsMeasuredBootEnabledInput`<sup>Optional</sup> <a name="IsMeasuredBootEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput"></a>

```csharp
public object IsMeasuredBootEnabledInput { get; }
```

- *Type:* object

---

##### `IsMemoryEncryptionEnabledInput`<sup>Optional</sup> <a name="IsMemoryEncryptionEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput"></a>

```csharp
public object IsMemoryEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `IsSecureBootEnabledInput`<sup>Optional</sup> <a name="IsSecureBootEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput"></a>

```csharp
public object IsSecureBootEnabledInput { get; }
```

- *Type:* object

---

##### `IsSymmetricMultiThreadingEnabledInput`<sup>Optional</sup> <a name="IsSymmetricMultiThreadingEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput"></a>

```csharp
public object IsSymmetricMultiThreadingEnabledInput { get; }
```

- *Type:* object

---

##### `IsTrustedPlatformModuleEnabledInput`<sup>Optional</sup> <a name="IsTrustedPlatformModuleEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput"></a>

```csharp
public object IsTrustedPlatformModuleEnabledInput { get; }
```

- *Type:* object

---

##### `NumaNodesPerSocketInput`<sup>Optional</sup> <a name="NumaNodesPerSocketInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput"></a>

```csharp
public string NumaNodesPerSocketInput { get; }
```

- *Type:* string

---

##### `PercentageOfCoresEnabledInput`<sup>Optional</sup> <a name="PercentageOfCoresEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput"></a>

```csharp
public double PercentageOfCoresEnabledInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AreVirtualInstructionsEnabled`<sup>Required</sup> <a name="AreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled"></a>

```csharp
public object AreVirtualInstructionsEnabled { get; }
```

- *Type:* object

---

##### `ConfigMap`<sup>Required</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IsAccessControlServiceEnabled`<sup>Required</sup> <a name="IsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled"></a>

```csharp
public object IsAccessControlServiceEnabled { get; }
```

- *Type:* object

---

##### `IsInputOutputMemoryManagementUnitEnabled`<sup>Required</sup> <a name="IsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled"></a>

```csharp
public object IsInputOutputMemoryManagementUnitEnabled { get; }
```

- *Type:* object

---

##### `IsMeasuredBootEnabled`<sup>Required</sup> <a name="IsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled"></a>

```csharp
public object IsMeasuredBootEnabled { get; }
```

- *Type:* object

---

##### `IsMemoryEncryptionEnabled`<sup>Required</sup> <a name="IsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled"></a>

```csharp
public object IsMemoryEncryptionEnabled { get; }
```

- *Type:* object

---

##### `IsSecureBootEnabled`<sup>Required</sup> <a name="IsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled"></a>

```csharp
public object IsSecureBootEnabled { get; }
```

- *Type:* object

---

##### `IsSymmetricMultiThreadingEnabled`<sup>Required</sup> <a name="IsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled"></a>

```csharp
public object IsSymmetricMultiThreadingEnabled { get; }
```

- *Type:* object

---

##### `IsTrustedPlatformModuleEnabled`<sup>Required</sup> <a name="IsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled"></a>

```csharp
public object IsTrustedPlatformModuleEnabled { get; }
```

- *Type:* object

---

##### `NumaNodesPerSocket`<sup>Required</sup> <a name="NumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket"></a>

```csharp
public string NumaNodesPerSocket { get; }
```

- *Type:* string

---

##### `PercentageOfCoresEnabled`<sup>Required</sup> <a name="PercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled"></a>

```csharp
public double PercentageOfCoresEnabled { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue"></a>

```csharp
public CoreInstancePlatformConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---


### CoreInstancePreemptibleInstanceConfigOutputReference <a name="CoreInstancePreemptibleInstanceConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstancePreemptibleInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction">PutPreemptionAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreemptionAction` <a name="PutPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction"></a>

```csharp
private void PutPreemptionAction(CoreInstancePreemptibleInstanceConfigPreemptionAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput">PreemptionActionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction"></a>

```csharp
public CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference PreemptionAction { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a>

---

##### `PreemptionActionInput`<sup>Optional</sup> <a name="PreemptionActionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput"></a>

```csharp
public CoreInstancePreemptibleInstanceConfigPreemptionAction PreemptionActionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public CoreInstancePreemptibleInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---


### CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference <a name="CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume">ResetPreserveBootVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveBootVolume` <a name="ResetPreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume"></a>

```csharp
private void ResetPreserveBootVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput">PreserveBootVolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreserveBootVolumeInput`<sup>Optional</sup> <a name="PreserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput"></a>

```csharp
public object PreserveBootVolumeInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `PreserveBootVolume`<sup>Required</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume"></a>

```csharp
public object PreserveBootVolume { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue"></a>

```csharp
public CoreInstancePreemptibleInstanceConfigPreemptionAction InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


### CoreInstanceShapeConfigOutputReference <a name="CoreInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization">ResetBaselineOcpuUtilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes">ResetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus">ResetVcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaselineOcpuUtilization` <a name="ResetBaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```csharp
private void ResetBaselineOcpuUtilization()
```

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```

##### `ResetNvmes` <a name="ResetNvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes"></a>

```csharp
private void ResetNvmes()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus"></a>

```csharp
private void ResetOcpus()
```

##### `ResetVcpus` <a name="ResetVcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus"></a>

```csharp
private void ResetVcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription">GpuDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus">Gpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription">LocalDiskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks">LocalDisks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs">LocalDisksTotalSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments">MaxVnicAttachments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput">BaselineOcpuUtilizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput">NvmesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput">VcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus">Vcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GpuDescription`<sup>Required</sup> <a name="GpuDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription"></a>

```csharp
public string GpuDescription { get; }
```

- *Type:* string

---

##### `Gpus`<sup>Required</sup> <a name="Gpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus"></a>

```csharp
public double Gpus { get; }
```

- *Type:* double

---

##### `LocalDiskDescription`<sup>Required</sup> <a name="LocalDiskDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription"></a>

```csharp
public string LocalDiskDescription { get; }
```

- *Type:* string

---

##### `LocalDisks`<sup>Required</sup> <a name="LocalDisks" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks"></a>

```csharp
public double LocalDisks { get; }
```

- *Type:* double

---

##### `LocalDisksTotalSizeInGbs`<sup>Required</sup> <a name="LocalDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs"></a>

```csharp
public double LocalDisksTotalSizeInGbs { get; }
```

- *Type:* double

---

##### `MaxVnicAttachments`<sup>Required</sup> <a name="MaxVnicAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments"></a>

```csharp
public double MaxVnicAttachments { get; }
```

- *Type:* double

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```csharp
public double NetworkingBandwidthInGbps { get; }
```

- *Type:* double

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription"></a>

```csharp
public string ProcessorDescription { get; }
```

- *Type:* string

---

##### `BaselineOcpuUtilizationInput`<sup>Optional</sup> <a name="BaselineOcpuUtilizationInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```csharp
public string BaselineOcpuUtilizationInput { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `NvmesInput`<sup>Optional</sup> <a name="NvmesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput"></a>

```csharp
public double NvmesInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `VcpusInput`<sup>Optional</sup> <a name="VcpusInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput"></a>

```csharp
public double VcpusInput { get; }
```

- *Type:* double

---

##### `BaselineOcpuUtilization`<sup>Required</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```csharp
public string BaselineOcpuUtilization { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes"></a>

```csharp
public double Nvmes { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus"></a>

```csharp
public double Vcpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---


### CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter">ResetDefinedTagsFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion">ResetOperatingSystemVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinedTagsFilter` <a name="ResetDefinedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter"></a>

```csharp
private void ResetDefinedTagsFilter()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetOperatingSystemVersion` <a name="ResetOperatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion"></a>

```csharp
private void ResetOperatingSystemVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput">DefinedTagsFilterInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput">OperatingSystemVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter">DefinedTagsFilter</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsFilterInput`<sup>Optional</sup> <a name="DefinedTagsFilterInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsFilterInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `OperatingSystemVersionInput`<sup>Optional</sup> <a name="OperatingSystemVersionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput"></a>

```csharp
public string OperatingSystemVersionInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTagsFilter`<sup>Required</sup> <a name="DefinedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsFilter { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `OperatingSystemVersion`<sup>Required</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion"></a>

```csharp
public string OperatingSystemVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceSourceDetailsInstanceSourceImageFilterDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---


### CoreInstanceSourceDetailsOutputReference <a name="CoreInstanceSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails">PutInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs">ResetBootVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb">ResetBootVolumeVpusPerGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails">ResetInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled">ResetIsPreserveBootVolumeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId">ResetSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceSourceImageFilterDetails` <a name="PutInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails"></a>

```csharp
private void PutInstanceSourceImageFilterDetails(CoreInstanceSourceDetailsInstanceSourceImageFilterDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `ResetBootVolumeSizeInGbs` <a name="ResetBootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs"></a>

```csharp
private void ResetBootVolumeSizeInGbs()
```

##### `ResetBootVolumeVpusPerGb` <a name="ResetBootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb"></a>

```csharp
private void ResetBootVolumeVpusPerGb()
```

##### `ResetInstanceSourceImageFilterDetails` <a name="ResetInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails"></a>

```csharp
private void ResetInstanceSourceImageFilterDetails()
```

##### `ResetIsPreserveBootVolumeEnabled` <a name="ResetIsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled"></a>

```csharp
private void ResetIsPreserveBootVolumeEnabled()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSourceId` <a name="ResetSourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId"></a>

```csharp
private void ResetSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails">InstanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput">BootVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput">BootVolumeVpusPerGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput">InstanceSourceImageFilterDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput">IsPreserveBootVolumeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb">BootVolumeVpusPerGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled">IsPreserveBootVolumeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceSourceImageFilterDetails`<sup>Required</sup> <a name="InstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails"></a>

```csharp
public CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference InstanceSourceImageFilterDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a>

---

##### `BootVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BootVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput"></a>

```csharp
public string BootVolumeSizeInGbsInput { get; }
```

- *Type:* string

---

##### `BootVolumeVpusPerGbInput`<sup>Optional</sup> <a name="BootVolumeVpusPerGbInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput"></a>

```csharp
public string BootVolumeVpusPerGbInput { get; }
```

- *Type:* string

---

##### `InstanceSourceImageFilterDetailsInput`<sup>Optional</sup> <a name="InstanceSourceImageFilterDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput"></a>

```csharp
public CoreInstanceSourceDetailsInstanceSourceImageFilterDetails InstanceSourceImageFilterDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `IsPreserveBootVolumeEnabledInput`<sup>Optional</sup> <a name="IsPreserveBootVolumeEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput"></a>

```csharp
public object IsPreserveBootVolumeEnabledInput { get; }
```

- *Type:* object

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput"></a>

```csharp
public string SourceIdInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `BootVolumeSizeInGbs`<sup>Required</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```csharp
public string BootVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `BootVolumeVpusPerGb`<sup>Required</sup> <a name="BootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb"></a>

```csharp
public string BootVolumeVpusPerGb { get; }
```

- *Type:* string

---

##### `IsPreserveBootVolumeEnabled`<sup>Required</sup> <a name="IsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled"></a>

```csharp
public object IsPreserveBootVolumeEnabled { get; }
```

- *Type:* object

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreInstanceSourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---


### CoreInstanceTimeoutsOutputReference <a name="CoreInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



