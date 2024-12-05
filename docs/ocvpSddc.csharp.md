# `ocvpSddc` Submodule <a name="`ocvpSddc` Submodule" id="rhizo-co-terraform-provider-oci.ocvpSddc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpSddc <a name="OcvpSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc oci_ocvp_sddc}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddc(Construct Scope, string Id, OcvpSddcConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig">OcvpSddcConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig">OcvpSddcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores">PutDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration">PutInitialConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain">ResetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores">ResetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount">ResetEsxiHostsCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion">ResetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction">ResetHcxAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId">ResetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration">ResetInitialConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount">ResetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName">ResetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku">ResetInitialSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix">ResetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled">ResetIsHcxEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled">ResetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc">ResetIsSingleHostSddc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId">ResetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId">ResetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId">ResetNsxEdgeVtepVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId">ResetNsxVtepVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId">ResetProvisioningSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId">ResetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus">ResetRefreshHcxLicenseStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId">ResetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys">ResetReservingHcxOnPremiseLicenseKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId">ResetVmotionVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId">ResetVsanVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId">ResetVsphereVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr">ResetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatastores` <a name="PutDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores"></a>

```csharp
private void PutDatastores(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores.parameter.value"></a>

- *Type:* object

---

##### `PutInitialConfiguration` <a name="PutInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration"></a>

```csharp
private void PutInitialConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts"></a>

```csharp
private void PutTimeouts(OcvpSddcTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

---

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId"></a>

```csharp
private void ResetCapacityReservationId()
```

##### `ResetComputeAvailabilityDomain` <a name="ResetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain"></a>

```csharp
private void ResetComputeAvailabilityDomain()
```

##### `ResetDatastores` <a name="ResetDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores"></a>

```csharp
private void ResetDatastores()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEsxiHostsCount` <a name="ResetEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount"></a>

```csharp
private void ResetEsxiHostsCount()
```

##### `ResetEsxiSoftwareVersion` <a name="ResetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion"></a>

```csharp
private void ResetEsxiSoftwareVersion()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHcxAction` <a name="ResetHcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction"></a>

```csharp
private void ResetHcxAction()
```

##### `ResetHcxVlanId` <a name="ResetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId"></a>

```csharp
private void ResetHcxVlanId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialConfiguration` <a name="ResetInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration"></a>

```csharp
private void ResetInitialConfiguration()
```

##### `ResetInitialHostOcpuCount` <a name="ResetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount"></a>

```csharp
private void ResetInitialHostOcpuCount()
```

##### `ResetInitialHostShapeName` <a name="ResetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName"></a>

```csharp
private void ResetInitialHostShapeName()
```

##### `ResetInitialSku` <a name="ResetInitialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku"></a>

```csharp
private void ResetInitialSku()
```

##### `ResetInstanceDisplayNamePrefix` <a name="ResetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix"></a>

```csharp
private void ResetInstanceDisplayNamePrefix()
```

##### `ResetIsHcxEnabled` <a name="ResetIsHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled"></a>

```csharp
private void ResetIsHcxEnabled()
```

##### `ResetIsShieldedInstanceEnabled` <a name="ResetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled"></a>

```csharp
private void ResetIsShieldedInstanceEnabled()
```

##### `ResetIsSingleHostSddc` <a name="ResetIsSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc"></a>

```csharp
private void ResetIsSingleHostSddc()
```

##### `ResetNsxEdgeUplink1VlanId` <a name="ResetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId"></a>

```csharp
private void ResetNsxEdgeUplink1VlanId()
```

##### `ResetNsxEdgeUplink2VlanId` <a name="ResetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId"></a>

```csharp
private void ResetNsxEdgeUplink2VlanId()
```

##### `ResetNsxEdgeVtepVlanId` <a name="ResetNsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId"></a>

```csharp
private void ResetNsxEdgeVtepVlanId()
```

##### `ResetNsxVtepVlanId` <a name="ResetNsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId"></a>

```csharp
private void ResetNsxVtepVlanId()
```

##### `ResetProvisioningSubnetId` <a name="ResetProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId"></a>

```csharp
private void ResetProvisioningSubnetId()
```

##### `ResetProvisioningVlanId` <a name="ResetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId"></a>

```csharp
private void ResetProvisioningVlanId()
```

##### `ResetRefreshHcxLicenseStatus` <a name="ResetRefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus"></a>

```csharp
private void ResetRefreshHcxLicenseStatus()
```

##### `ResetReplicationVlanId` <a name="ResetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId"></a>

```csharp
private void ResetReplicationVlanId()
```

##### `ResetReservingHcxOnPremiseLicenseKeys` <a name="ResetReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys"></a>

```csharp
private void ResetReservingHcxOnPremiseLicenseKeys()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVmotionVlanId` <a name="ResetVmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId"></a>

```csharp
private void ResetVmotionVlanId()
```

##### `ResetVsanVlanId` <a name="ResetVsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId"></a>

```csharp
private void ResetVsanVlanId()
```

##### `ResetVsphereVlanId` <a name="ResetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId"></a>

```csharp
private void ResetVsphereVlanId()
```

##### `ResetWorkloadNetworkCidr` <a name="ResetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr"></a>

```csharp
private void ResetWorkloadNetworkCidr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpSddc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpSddc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpSddc.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpSddc.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OcvpSddc to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OcvpSddc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OcvpSddc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount">ClustersCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn">HcxFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword">HcxInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode">HcxMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey">HcxOnPremKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses">HcxOnPremLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId">HcxPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration">InitialConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled">IsHcxEnterpriseEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade">IsHcxPendingDowngrade</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId">NsxEdgeUplinkIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn">NsxManagerFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword">NsxManagerInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId">NsxManagerPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername">NsxManagerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName">NsxOverlaySegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd">TimeHcxBillingCycleEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated">TimeHcxLicenseStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses">UpgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn">VcenterFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword">VcenterInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId">VcenterPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername">VcenterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide">VsphereUpgradeGuide</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects">VsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput">ComputeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput">DatastoresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput">EsxiHostsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput">EsxiSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput">HcxActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput">HcxVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput">InitialConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput">InitialHostOcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput">InitialHostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput">InitialSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput">InstanceDisplayNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput">IsHcxEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput">IsShieldedInstanceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput">IsSingleHostSddcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput">NsxEdgeUplink1VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput">NsxEdgeUplink2VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput">NsxEdgeVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput">NsxVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput">ProvisioningSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput">ProvisioningVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput">RefreshHcxLicenseStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput">ReplicationVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput">ReservingHcxOnPremiseLicenseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput">SshAuthorizedKeysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput">VmotionVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput">VmwareSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput">VsanVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput">VsphereVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput">WorkloadNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction">HcxAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku">InitialSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled">IsHcxEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc">IsSingleHostSddc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus">RefreshHcxLicenseStatus</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys">ReservingHcxOnPremiseLicenseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys">SshAuthorizedKeys</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount"></a>

```csharp
public double ActualEsxiHostsCount { get; }
```

- *Type:* double

---

##### `ClustersCount`<sup>Required</sup> <a name="ClustersCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount"></a>

```csharp
public double ClustersCount { get; }
```

- *Type:* double

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores"></a>

```csharp
public OcvpSddcDatastoresList Datastores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a>

---

##### `HcxFqdn`<sup>Required</sup> <a name="HcxFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn"></a>

```csharp
public string HcxFqdn { get; }
```

- *Type:* string

---

##### `HcxInitialPassword`<sup>Required</sup> <a name="HcxInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword"></a>

```csharp
public string HcxInitialPassword { get; }
```

- *Type:* string

---

##### `HcxMode`<sup>Required</sup> <a name="HcxMode" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode"></a>

```csharp
public string HcxMode { get; }
```

- *Type:* string

---

##### `HcxOnPremKey`<sup>Required</sup> <a name="HcxOnPremKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey"></a>

```csharp
public string HcxOnPremKey { get; }
```

- *Type:* string

---

##### `HcxOnPremLicenses`<sup>Required</sup> <a name="HcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses"></a>

```csharp
public OcvpSddcHcxOnPremLicensesList HcxOnPremLicenses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a>

---

##### `HcxPrivateIpId`<sup>Required</sup> <a name="HcxPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId"></a>

```csharp
public string HcxPrivateIpId { get; }
```

- *Type:* string

---

##### `InitialConfiguration`<sup>Required</sup> <a name="InitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration"></a>

```csharp
public OcvpSddcInitialConfigurationList InitialConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a>

---

##### `IsHcxEnterpriseEnabled`<sup>Required</sup> <a name="IsHcxEnterpriseEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled"></a>

```csharp
public IResolvable IsHcxEnterpriseEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHcxPendingDowngrade`<sup>Required</sup> <a name="IsHcxPendingDowngrade" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade"></a>

```csharp
public IResolvable IsHcxPendingDowngrade { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NsxEdgeUplinkIpId`<sup>Required</sup> <a name="NsxEdgeUplinkIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId"></a>

```csharp
public string NsxEdgeUplinkIpId { get; }
```

- *Type:* string

---

##### `NsxManagerFqdn`<sup>Required</sup> <a name="NsxManagerFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn"></a>

```csharp
public string NsxManagerFqdn { get; }
```

- *Type:* string

---

##### `NsxManagerInitialPassword`<sup>Required</sup> <a name="NsxManagerInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword"></a>

```csharp
public string NsxManagerInitialPassword { get; }
```

- *Type:* string

---

##### `NsxManagerPrivateIpId`<sup>Required</sup> <a name="NsxManagerPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId"></a>

```csharp
public string NsxManagerPrivateIpId { get; }
```

- *Type:* string

---

##### `NsxManagerUsername`<sup>Required</sup> <a name="NsxManagerUsername" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername"></a>

```csharp
public string NsxManagerUsername { get; }
```

- *Type:* string

---

##### `NsxOverlaySegmentName`<sup>Required</sup> <a name="NsxOverlaySegmentName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName"></a>

```csharp
public string NsxOverlaySegmentName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeHcxBillingCycleEnd`<sup>Required</sup> <a name="TimeHcxBillingCycleEnd" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd"></a>

```csharp
public string TimeHcxBillingCycleEnd { get; }
```

- *Type:* string

---

##### `TimeHcxLicenseStatusUpdated`<sup>Required</sup> <a name="TimeHcxLicenseStatusUpdated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated"></a>

```csharp
public string TimeHcxLicenseStatusUpdated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts"></a>

```csharp
public OcvpSddcTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradeLicenses`<sup>Required</sup> <a name="UpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses"></a>

```csharp
public OcvpSddcUpgradeLicensesList UpgradeLicenses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a>

---

##### `VcenterFqdn`<sup>Required</sup> <a name="VcenterFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn"></a>

```csharp
public string VcenterFqdn { get; }
```

- *Type:* string

---

##### `VcenterInitialPassword`<sup>Required</sup> <a name="VcenterInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword"></a>

```csharp
public string VcenterInitialPassword { get; }
```

- *Type:* string

---

##### `VcenterPrivateIpId`<sup>Required</sup> <a name="VcenterPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId"></a>

```csharp
public string VcenterPrivateIpId { get; }
```

- *Type:* string

---

##### `VcenterUsername`<sup>Required</sup> <a name="VcenterUsername" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername"></a>

```csharp
public string VcenterUsername { get; }
```

- *Type:* string

---

##### `VsphereUpgradeGuide`<sup>Required</sup> <a name="VsphereUpgradeGuide" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide"></a>

```csharp
public string VsphereUpgradeGuide { get; }
```

- *Type:* string

---

##### `VsphereUpgradeObjects`<sup>Required</sup> <a name="VsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects"></a>

```csharp
public OcvpSddcVsphereUpgradeObjectsList VsphereUpgradeObjects { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a>

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput"></a>

```csharp
public string CapacityReservationIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomainInput`<sup>Optional</sup> <a name="ComputeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput"></a>

```csharp
public string ComputeAvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `DatastoresInput`<sup>Optional</sup> <a name="DatastoresInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput"></a>

```csharp
public object DatastoresInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EsxiHostsCountInput`<sup>Optional</sup> <a name="EsxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput"></a>

```csharp
public double EsxiHostsCountInput { get; }
```

- *Type:* double

---

##### `EsxiSoftwareVersionInput`<sup>Optional</sup> <a name="EsxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput"></a>

```csharp
public string EsxiSoftwareVersionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HcxActionInput`<sup>Optional</sup> <a name="HcxActionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput"></a>

```csharp
public string HcxActionInput { get; }
```

- *Type:* string

---

##### `HcxVlanIdInput`<sup>Optional</sup> <a name="HcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput"></a>

```csharp
public string HcxVlanIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialConfigurationInput`<sup>Optional</sup> <a name="InitialConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput"></a>

```csharp
public object InitialConfigurationInput { get; }
```

- *Type:* object

---

##### `InitialHostOcpuCountInput`<sup>Optional</sup> <a name="InitialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput"></a>

```csharp
public double InitialHostOcpuCountInput { get; }
```

- *Type:* double

---

##### `InitialHostShapeNameInput`<sup>Optional</sup> <a name="InitialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput"></a>

```csharp
public string InitialHostShapeNameInput { get; }
```

- *Type:* string

---

##### `InitialSkuInput`<sup>Optional</sup> <a name="InitialSkuInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput"></a>

```csharp
public string InitialSkuInput { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="InstanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput"></a>

```csharp
public string InstanceDisplayNamePrefixInput { get; }
```

- *Type:* string

---

##### `IsHcxEnabledInput`<sup>Optional</sup> <a name="IsHcxEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput"></a>

```csharp
public object IsHcxEnabledInput { get; }
```

- *Type:* object

---

##### `IsShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="IsShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput"></a>

```csharp
public object IsShieldedInstanceEnabledInput { get; }
```

- *Type:* object

---

##### `IsSingleHostSddcInput`<sup>Optional</sup> <a name="IsSingleHostSddcInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput"></a>

```csharp
public object IsSingleHostSddcInput { get; }
```

- *Type:* object

---

##### `NsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput"></a>

```csharp
public string NsxEdgeUplink1VlanIdInput { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput"></a>

```csharp
public string NsxEdgeUplink2VlanIdInput { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="NsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput"></a>

```csharp
public string NsxEdgeVtepVlanIdInput { get; }
```

- *Type:* string

---

##### `NsxVtepVlanIdInput`<sup>Optional</sup> <a name="NsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput"></a>

```csharp
public string NsxVtepVlanIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetIdInput`<sup>Optional</sup> <a name="ProvisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput"></a>

```csharp
public string ProvisioningSubnetIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningVlanIdInput`<sup>Optional</sup> <a name="ProvisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput"></a>

```csharp
public string ProvisioningVlanIdInput { get; }
```

- *Type:* string

---

##### `RefreshHcxLicenseStatusInput`<sup>Optional</sup> <a name="RefreshHcxLicenseStatusInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput"></a>

```csharp
public object RefreshHcxLicenseStatusInput { get; }
```

- *Type:* object

---

##### `ReplicationVlanIdInput`<sup>Optional</sup> <a name="ReplicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput"></a>

```csharp
public string ReplicationVlanIdInput { get; }
```

- *Type:* string

---

##### `ReservingHcxOnPremiseLicenseKeysInput`<sup>Optional</sup> <a name="ReservingHcxOnPremiseLicenseKeysInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput"></a>

```csharp
public string[] ReservingHcxOnPremiseLicenseKeysInput { get; }
```

- *Type:* string[]

---

##### `SshAuthorizedKeysInput`<sup>Optional</sup> <a name="SshAuthorizedKeysInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput"></a>

```csharp
public string SshAuthorizedKeysInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmotionVlanIdInput`<sup>Optional</sup> <a name="VmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput"></a>

```csharp
public string VmotionVlanIdInput { get; }
```

- *Type:* string

---

##### `VmwareSoftwareVersionInput`<sup>Optional</sup> <a name="VmwareSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput"></a>

```csharp
public string VmwareSoftwareVersionInput { get; }
```

- *Type:* string

---

##### `VsanVlanIdInput`<sup>Optional</sup> <a name="VsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput"></a>

```csharp
public string VsanVlanIdInput { get; }
```

- *Type:* string

---

##### `VsphereVlanIdInput`<sup>Optional</sup> <a name="VsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput"></a>

```csharp
public string VsphereVlanIdInput { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidrInput`<sup>Optional</sup> <a name="WorkloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput"></a>

```csharp
public string WorkloadNetworkCidrInput { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; }
```

- *Type:* double

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HcxAction`<sup>Required</sup> <a name="HcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction"></a>

```csharp
public string HcxAction { get; }
```

- *Type:* string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; }
```

- *Type:* double

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; }
```

- *Type:* string

---

##### `InitialSku`<sup>Required</sup> <a name="InitialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku"></a>

```csharp
public string InitialSku { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; }
```

- *Type:* string

---

##### `IsHcxEnabled`<sup>Required</sup> <a name="IsHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled"></a>

```csharp
public object IsHcxEnabled { get; }
```

- *Type:* object

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled"></a>

```csharp
public object IsShieldedInstanceEnabled { get; }
```

- *Type:* object

---

##### `IsSingleHostSddc`<sup>Required</sup> <a name="IsSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc"></a>

```csharp
public object IsSingleHostSddc { get; }
```

- *Type:* object

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; }
```

- *Type:* string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; }
```

- *Type:* string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; }
```

- *Type:* string

---

##### `RefreshHcxLicenseStatus`<sup>Required</sup> <a name="RefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus"></a>

```csharp
public object RefreshHcxLicenseStatus { get; }
```

- *Type:* object

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; }
```

- *Type:* string

---

##### `ReservingHcxOnPremiseLicenseKeys`<sup>Required</sup> <a name="ReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys"></a>

```csharp
public string[] ReservingHcxOnPremiseLicenseKeys { get; }
```

- *Type:* string[]

---

##### `SshAuthorizedKeys`<sup>Required</sup> <a name="SshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys"></a>

```csharp
public string SshAuthorizedKeys { get; }
```

- *Type:* string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; }
```

- *Type:* string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; }
```

- *Type:* string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; }
```

- *Type:* string

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpSddcConfig <a name="OcvpSddcConfig" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string SshAuthorizedKeys,
    string VmwareSoftwareVersion,
    string CapacityReservationId = null,
    string ComputeAvailabilityDomain = null,
    object Datastores = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    double EsxiHostsCount = null,
    string EsxiSoftwareVersion = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string HcxAction = null,
    string HcxVlanId = null,
    string Id = null,
    object InitialConfiguration = null,
    double InitialHostOcpuCount = null,
    string InitialHostShapeName = null,
    string InitialSku = null,
    string InstanceDisplayNamePrefix = null,
    object IsHcxEnabled = null,
    object IsShieldedInstanceEnabled = null,
    object IsSingleHostSddc = null,
    string NsxEdgeUplink1VlanId = null,
    string NsxEdgeUplink2VlanId = null,
    string NsxEdgeVtepVlanId = null,
    string NsxVtepVlanId = null,
    string ProvisioningSubnetId = null,
    string ProvisioningVlanId = null,
    object RefreshHcxLicenseStatus = null,
    string ReplicationVlanId = null,
    string[] ReservingHcxOnPremiseLicenseKeys = null,
    OcvpSddcTimeouts Timeouts = null,
    string VmotionVlanId = null,
    string VsanVlanId = null,
    string VsphereVlanId = null,
    string WorkloadNetworkCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys">SshAuthorizedKeys</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores">Datastores</a></code> | <code>object</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction">HcxAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration">InitialConfiguration</a></code> | <code>object</code> | initial_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku">InitialSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled">IsHcxEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc">IsSingleHostSddc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus">RefreshHcxLicenseStatus</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys">ReservingHcxOnPremiseLicenseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}.

---

##### `SshAuthorizedKeys`<sup>Required</sup> <a name="SshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys"></a>

```csharp
public string SshAuthorizedKeys { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}.

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `ComputeAvailabilityDomain`<sup>Optional</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `Datastores`<sup>Optional</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores"></a>

```csharp
public object Datastores { get; set; }
```

- *Type:* object

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `EsxiHostsCount`<sup>Optional</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `EsxiSoftwareVersion`<sup>Optional</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}.

---

##### `HcxAction`<sup>Optional</sup> <a name="HcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction"></a>

```csharp
public string HcxAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}.

---

##### `HcxVlanId`<sup>Optional</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialConfiguration`<sup>Optional</sup> <a name="InitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration"></a>

```csharp
public object InitialConfiguration { get; set; }
```

- *Type:* object

initial_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_configuration OcvpSddc#initial_configuration}

---

##### `InitialHostOcpuCount`<sup>Optional</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `InitialHostShapeName`<sup>Optional</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `InitialSku`<sup>Optional</sup> <a name="InitialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku"></a>

```csharp
public string InitialSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}.

---

##### `InstanceDisplayNamePrefix`<sup>Optional</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `IsHcxEnabled`<sup>Optional</sup> <a name="IsHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled"></a>

```csharp
public object IsHcxEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}.

---

##### `IsShieldedInstanceEnabled`<sup>Optional</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled"></a>

```csharp
public object IsShieldedInstanceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `IsSingleHostSddc`<sup>Optional</sup> <a name="IsSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc"></a>

```csharp
public object IsSingleHostSddc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}.

---

##### `NsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `NsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `NsxEdgeVtepVlanId`<sup>Optional</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `NsxVtepVlanId`<sup>Optional</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `ProvisioningSubnetId`<sup>Optional</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `ProvisioningVlanId`<sup>Optional</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `RefreshHcxLicenseStatus`<sup>Optional</sup> <a name="RefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus"></a>

```csharp
public object RefreshHcxLicenseStatus { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}.

---

##### `ReplicationVlanId`<sup>Optional</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `ReservingHcxOnPremiseLicenseKeys`<sup>Optional</sup> <a name="ReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys"></a>

```csharp
public string[] ReservingHcxOnPremiseLicenseKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts"></a>

```csharp
public OcvpSddcTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#timeouts OcvpSddc#timeouts}

---

##### `VmotionVlanId`<sup>Optional</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `VsanVlanId`<sup>Optional</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `VsphereVlanId`<sup>Optional</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

##### `WorkloadNetworkCidr`<sup>Optional</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcDatastores <a name="OcvpSddcDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcDatastores {
    string[] BlockVolumeIds,
    string DatastoreType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType">DatastoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType"></a>

```csharp
public string DatastoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcHcxOnPremLicenses <a name="OcvpSddcHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcHcxOnPremLicenses {

};
```


### OcvpSddcInitialConfiguration <a name="OcvpSddcInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfiguration {
    object InitialClusterConfigurations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations">InitialClusterConfigurations</a></code> | <code>object</code> | initial_cluster_configurations block. |

---

##### `InitialClusterConfigurations`<sup>Required</sup> <a name="InitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations"></a>

```csharp
public object InitialClusterConfigurations { get; set; }
```

- *Type:* object

initial_cluster_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_cluster_configurations OcvpSddc#initial_cluster_configurations}

---

### OcvpSddcInitialConfigurationInitialClusterConfigurations <a name="OcvpSddcInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationInitialClusterConfigurations {
    string ComputeAvailabilityDomain,
    double EsxiHostsCount,
    string VsphereType,
    string CapacityReservationId = null,
    object Datastores = null,
    string DisplayName = null,
    string InitialCommitment = null,
    double InitialHostOcpuCount = null,
    string InitialHostShapeName = null,
    string InstanceDisplayNamePrefix = null,
    object IsShieldedInstanceEnabled = null,
    OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration NetworkConfiguration = null,
    string WorkloadNetworkCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType">VsphereType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores">Datastores</a></code> | <code>object</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment">InitialCommitment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `VsphereType`<sup>Required</sup> <a name="VsphereType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType"></a>

```csharp
public string VsphereType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `Datastores`<sup>Optional</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores"></a>

```csharp
public object Datastores { get; set; }
```

- *Type:* object

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `InitialCommitment`<sup>Optional</sup> <a name="InitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment"></a>

```csharp
public string InitialCommitment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}.

---

##### `InitialHostOcpuCount`<sup>Optional</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `InitialHostShapeName`<sup>Optional</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `InstanceDisplayNamePrefix`<sup>Optional</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `IsShieldedInstanceEnabled`<sup>Optional</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled"></a>

```csharp
public object IsShieldedInstanceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration"></a>

```csharp
public OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#network_configuration OcvpSddc#network_configuration}

---

##### `WorkloadNetworkCidr`<sup>Optional</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores {
    string[] BlockVolumeIds,
    string DatastoreType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType">DatastoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType"></a>

```csharp
public string DatastoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration {
    string NsxEdgeVtepVlanId,
    string NsxVtepVlanId,
    string ProvisioningSubnetId,
    string VmotionVlanId,
    string VsanVlanId,
    string HcxVlanId = null,
    string NsxEdgeUplink1VlanId = null,
    string NsxEdgeUplink2VlanId = null,
    string ProvisioningVlanId = null,
    string ReplicationVlanId = null,
    string VsphereVlanId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `HcxVlanId`<sup>Optional</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `NsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `NsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `ProvisioningVlanId`<sup>Optional</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `ReplicationVlanId`<sup>Optional</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `VsphereVlanId`<sup>Optional</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

### OcvpSddcTimeouts <a name="OcvpSddcTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}.

---

### OcvpSddcUpgradeLicenses <a name="OcvpSddcUpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcUpgradeLicenses {

};
```


### OcvpSddcVsphereUpgradeObjects <a name="OcvpSddcVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcVsphereUpgradeObjects {

};
```


## Classes <a name="Classes" id="Classes"></a>

### OcvpSddcDatastoresList <a name="OcvpSddcDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcDatastoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get"></a>

```csharp
private OcvpSddcDatastoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcDatastoresOutputReference <a name="OcvpSddcDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcDatastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput">BlockVolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput">DatastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `BlockVolumeIdsInput`<sup>Optional</sup> <a name="BlockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```csharp
public string[] BlockVolumeIdsInput { get; }
```

- *Type:* string[]

---

##### `DatastoreTypeInput`<sup>Optional</sup> <a name="DatastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput"></a>

```csharp
public string DatastoreTypeInput { get; }
```

- *Type:* string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; }
```

- *Type:* string[]

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType"></a>

```csharp
public string DatastoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcHcxOnPremLicensesList <a name="OcvpSddcHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcHcxOnPremLicensesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get"></a>

```csharp
private OcvpSddcHcxOnPremLicensesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OcvpSddcHcxOnPremLicensesOutputReference <a name="OcvpSddcHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcHcxOnPremLicensesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey">ActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName">SystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationKey`<sup>Required</sup> <a name="ActivationKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey"></a>

```csharp
public string ActivationKey { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemName`<sup>Required</sup> <a name="SystemName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName"></a>

```csharp
public string SystemName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue"></a>

```csharp
public OcvpSddcHcxOnPremLicenses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```csharp
private OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput">BlockVolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput">DatastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockVolumeIdsInput`<sup>Optional</sup> <a name="BlockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```csharp
public string[] BlockVolumeIdsInput { get; }
```

- *Type:* string[]

---

##### `DatastoreTypeInput`<sup>Optional</sup> <a name="DatastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput"></a>

```csharp
public string DatastoreTypeInput { get; }
```

- *Type:* string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; }
```

- *Type:* string[]

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```csharp
public string DatastoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get"></a>

```csharp
private OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId">ResetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId">ResetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId">ResetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId">ResetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId">ResetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId">ResetVsphereVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHcxVlanId` <a name="ResetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId"></a>

```csharp
private void ResetHcxVlanId()
```

##### `ResetNsxEdgeUplink1VlanId` <a name="ResetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId"></a>

```csharp
private void ResetNsxEdgeUplink1VlanId()
```

##### `ResetNsxEdgeUplink2VlanId` <a name="ResetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId"></a>

```csharp
private void ResetNsxEdgeUplink2VlanId()
```

##### `ResetProvisioningVlanId` <a name="ResetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId"></a>

```csharp
private void ResetProvisioningVlanId()
```

##### `ResetReplicationVlanId` <a name="ResetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId"></a>

```csharp
private void ResetReplicationVlanId()
```

##### `ResetVsphereVlanId` <a name="ResetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId"></a>

```csharp
private void ResetVsphereVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput">HcxVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput">NsxEdgeUplink1VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput">NsxEdgeUplink2VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput">NsxEdgeVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput">NsxVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput">ProvisioningSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput">ProvisioningVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput">ReplicationVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput">VmotionVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput">VsanVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput">VsphereVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HcxVlanIdInput`<sup>Optional</sup> <a name="HcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput"></a>

```csharp
public string HcxVlanIdInput { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput"></a>

```csharp
public string NsxEdgeUplink1VlanIdInput { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput"></a>

```csharp
public string NsxEdgeUplink2VlanIdInput { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="NsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput"></a>

```csharp
public string NsxEdgeVtepVlanIdInput { get; }
```

- *Type:* string

---

##### `NsxVtepVlanIdInput`<sup>Optional</sup> <a name="NsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput"></a>

```csharp
public string NsxVtepVlanIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetIdInput`<sup>Optional</sup> <a name="ProvisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput"></a>

```csharp
public string ProvisioningSubnetIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningVlanIdInput`<sup>Optional</sup> <a name="ProvisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput"></a>

```csharp
public string ProvisioningVlanIdInput { get; }
```

- *Type:* string

---

##### `ReplicationVlanIdInput`<sup>Optional</sup> <a name="ReplicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput"></a>

```csharp
public string ReplicationVlanIdInput { get; }
```

- *Type:* string

---

##### `VmotionVlanIdInput`<sup>Optional</sup> <a name="VmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput"></a>

```csharp
public string VmotionVlanIdInput { get; }
```

- *Type:* string

---

##### `VsanVlanIdInput`<sup>Optional</sup> <a name="VsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput"></a>

```csharp
public string VsanVlanIdInput { get; }
```

- *Type:* string

---

##### `VsphereVlanIdInput`<sup>Optional</sup> <a name="VsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput"></a>

```csharp
public string VsphereVlanIdInput { get; }
```

- *Type:* string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; }
```

- *Type:* string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; }
```

- *Type:* string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; }
```

- *Type:* string

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; }
```

- *Type:* string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; }
```

- *Type:* string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; }
```

- *Type:* string

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores">PutDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores">ResetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment">ResetInitialCommitment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount">ResetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName">ResetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix">ResetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled">ResetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr">ResetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatastores` <a name="PutDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores"></a>

```csharp
private void PutDatastores(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId"></a>

```csharp
private void ResetCapacityReservationId()
```

##### `ResetDatastores` <a name="ResetDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores"></a>

```csharp
private void ResetDatastores()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInitialCommitment` <a name="ResetInitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment"></a>

```csharp
private void ResetInitialCommitment()
```

##### `ResetInitialHostOcpuCount` <a name="ResetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount"></a>

```csharp
private void ResetInitialHostOcpuCount()
```

##### `ResetInitialHostShapeName` <a name="ResetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName"></a>

```csharp
private void ResetInitialHostShapeName()
```

##### `ResetInstanceDisplayNamePrefix` <a name="ResetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix"></a>

```csharp
private void ResetInstanceDisplayNamePrefix()
```

##### `ResetIsShieldedInstanceEnabled` <a name="ResetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled"></a>

```csharp
private void ResetIsShieldedInstanceEnabled()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetWorkloadNetworkCidr` <a name="ResetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr"></a>

```csharp
private void ResetWorkloadNetworkCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput">ComputeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput">DatastoresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput">EsxiHostsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput">InitialCommitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput">InitialHostOcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput">InitialHostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput">InstanceDisplayNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput">IsShieldedInstanceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput">VsphereTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput">WorkloadNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">InitialCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">VsphereType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```csharp
public double ActualEsxiHostsCount { get; }
```

- *Type:* double

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```csharp
public OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList Datastores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```csharp
public OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a>

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput"></a>

```csharp
public string CapacityReservationIdInput { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomainInput`<sup>Optional</sup> <a name="ComputeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput"></a>

```csharp
public string ComputeAvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `DatastoresInput`<sup>Optional</sup> <a name="DatastoresInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput"></a>

```csharp
public object DatastoresInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EsxiHostsCountInput`<sup>Optional</sup> <a name="EsxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput"></a>

```csharp
public double EsxiHostsCountInput { get; }
```

- *Type:* double

---

##### `InitialCommitmentInput`<sup>Optional</sup> <a name="InitialCommitmentInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput"></a>

```csharp
public string InitialCommitmentInput { get; }
```

- *Type:* string

---

##### `InitialHostOcpuCountInput`<sup>Optional</sup> <a name="InitialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput"></a>

```csharp
public double InitialHostOcpuCountInput { get; }
```

- *Type:* double

---

##### `InitialHostShapeNameInput`<sup>Optional</sup> <a name="InitialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput"></a>

```csharp
public string InitialHostShapeNameInput { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="InstanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput"></a>

```csharp
public string InstanceDisplayNamePrefixInput { get; }
```

- *Type:* string

---

##### `IsShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="IsShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput"></a>

```csharp
public object IsShieldedInstanceEnabledInput { get; }
```

- *Type:* object

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput"></a>

```csharp
public OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `VsphereTypeInput`<sup>Optional</sup> <a name="VsphereTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput"></a>

```csharp
public string VsphereTypeInput { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidrInput`<sup>Optional</sup> <a name="WorkloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput"></a>

```csharp
public string WorkloadNetworkCidrInput { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; }
```

- *Type:* double

---

##### `InitialCommitment`<sup>Required</sup> <a name="InitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```csharp
public string InitialCommitment { get; }
```

- *Type:* string

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; }
```

- *Type:* double

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; }
```

- *Type:* string

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```csharp
public object IsShieldedInstanceEnabled { get; }
```

- *Type:* object

---

##### `VsphereType`<sup>Required</sup> <a name="VsphereType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```csharp
public string VsphereType { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcInitialConfigurationList <a name="OcvpSddcInitialConfigurationList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get"></a>

```csharp
private OcvpSddcInitialConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcInitialConfigurationOutputReference <a name="OcvpSddcInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcInitialConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations">PutInitialClusterConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitialClusterConfigurations` <a name="PutInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations"></a>

```csharp
private void PutInitialClusterConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations">InitialClusterConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput">InitialClusterConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialClusterConfigurations`<sup>Required</sup> <a name="InitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```csharp
public OcvpSddcInitialConfigurationInitialClusterConfigurationsList InitialClusterConfigurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `InitialClusterConfigurationsInput`<sup>Optional</sup> <a name="InitialClusterConfigurationsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput"></a>

```csharp
public object InitialClusterConfigurationsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcTimeoutsOutputReference <a name="OcvpSddcTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpSddcUpgradeLicensesList <a name="OcvpSddcUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcUpgradeLicensesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get"></a>

```csharp
private OcvpSddcUpgradeLicensesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OcvpSddcUpgradeLicensesOutputReference <a name="OcvpSddcUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcUpgradeLicensesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey">LicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LicenseKey`<sup>Required</sup> <a name="LicenseKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey"></a>

```csharp
public string LicenseKey { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue"></a>

```csharp
public OcvpSddcUpgradeLicenses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a>

---


### OcvpSddcVsphereUpgradeObjectsList <a name="OcvpSddcVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcVsphereUpgradeObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get"></a>

```csharp
private OcvpSddcVsphereUpgradeObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OcvpSddcVsphereUpgradeObjectsOutputReference <a name="OcvpSddcVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpSddcVsphereUpgradeObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink">DownloadLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription">LinkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownloadLink`<sup>Required</sup> <a name="DownloadLink" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```csharp
public string DownloadLink { get; }
```

- *Type:* string

---

##### `LinkDescription`<sup>Required</sup> <a name="LinkDescription" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```csharp
public string LinkDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```csharp
public OcvpSddcVsphereUpgradeObjects InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a>

---



