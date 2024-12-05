# `ocvpEsxiHost` Submodule <a name="`ocvpEsxiHost` Submodule" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpEsxiHost <a name="OcvpEsxiHost" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host oci_ocvp_esxi_host}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpEsxiHost(Construct Scope, string Id, OcvpEsxiHostConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig">OcvpEsxiHostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig">OcvpEsxiHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId">ResetBillingDonorHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain">ResetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku">ResetCurrentSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion">ResetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId">ResetFailedEsxiHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount">ResetHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName">ResetHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku">ResetNextSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId">ResetNonUpgradedEsxiHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId">ResetSddcId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts"></a>

```csharp
private void PutTimeouts(OcvpEsxiHostTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

---

##### `ResetBillingDonorHostId` <a name="ResetBillingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId"></a>

```csharp
private void ResetBillingDonorHostId()
```

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId"></a>

```csharp
private void ResetCapacityReservationId()
```

##### `ResetClusterId` <a name="ResetClusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetComputeAvailabilityDomain` <a name="ResetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain"></a>

```csharp
private void ResetComputeAvailabilityDomain()
```

##### `ResetCurrentSku` <a name="ResetCurrentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku"></a>

```csharp
private void ResetCurrentSku()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEsxiSoftwareVersion` <a name="ResetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion"></a>

```csharp
private void ResetEsxiSoftwareVersion()
```

##### `ResetFailedEsxiHostId` <a name="ResetFailedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId"></a>

```csharp
private void ResetFailedEsxiHostId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHostOcpuCount` <a name="ResetHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount"></a>

```csharp
private void ResetHostOcpuCount()
```

##### `ResetHostShapeName` <a name="ResetHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName"></a>

```csharp
private void ResetHostShapeName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNextSku` <a name="ResetNextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku"></a>

```csharp
private void ResetNextSku()
```

##### `ResetNonUpgradedEsxiHostId` <a name="ResetNonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId"></a>

```csharp
private void ResetNonUpgradedEsxiHostId()
```

##### `ResetSddcId` <a name="ResetSddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId"></a>

```csharp
private void ResetSddcId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpEsxiHost.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpEsxiHost.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpEsxiHost.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpEsxiHost.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OcvpEsxiHost to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OcvpEsxiHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OcvpEsxiHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate">BillingContractEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId">ComputeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment">CurrentCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate">GracePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress">IsBillingContinuationInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress">IsBillingSwappingInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment">NextCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId">ReplacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId">SwapBillingHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId">UpgradedReplacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput">BillingDonorHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput">ComputeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput">CurrentSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput">EsxiSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput">FailedEsxiHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput">HostOcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput">HostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput">NextSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput">NonUpgradedEsxiHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput">SddcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId">BillingDonorHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku">CurrentSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId">FailedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount">HostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName">HostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku">NextSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId">NonUpgradedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId">SddcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BillingContractEndDate`<sup>Required</sup> <a name="BillingContractEndDate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate"></a>

```csharp
public string BillingContractEndDate { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeInstanceId`<sup>Required</sup> <a name="ComputeInstanceId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId"></a>

```csharp
public string ComputeInstanceId { get; }
```

- *Type:* string

---

##### `CurrentCommitment`<sup>Required</sup> <a name="CurrentCommitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment"></a>

```csharp
public string CurrentCommitment { get; }
```

- *Type:* string

---

##### `GracePeriodEndDate`<sup>Required</sup> <a name="GracePeriodEndDate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate"></a>

```csharp
public string GracePeriodEndDate { get; }
```

- *Type:* string

---

##### `IsBillingContinuationInProgress`<sup>Required</sup> <a name="IsBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress"></a>

```csharp
public IResolvable IsBillingContinuationInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsBillingSwappingInProgress`<sup>Required</sup> <a name="IsBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress"></a>

```csharp
public IResolvable IsBillingSwappingInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NextCommitment`<sup>Required</sup> <a name="NextCommitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment"></a>

```csharp
public string NextCommitment { get; }
```

- *Type:* string

---

##### `ReplacementEsxiHostId`<sup>Required</sup> <a name="ReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId"></a>

```csharp
public string ReplacementEsxiHostId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SwapBillingHostId`<sup>Required</sup> <a name="SwapBillingHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId"></a>

```csharp
public string SwapBillingHostId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts"></a>

```csharp
public OcvpEsxiHostTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradedReplacementEsxiHostId`<sup>Required</sup> <a name="UpgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId"></a>

```csharp
public string UpgradedReplacementEsxiHostId { get; }
```

- *Type:* string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; }
```

- *Type:* string

---

##### `BillingDonorHostIdInput`<sup>Optional</sup> <a name="BillingDonorHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput"></a>

```csharp
public string BillingDonorHostIdInput { get; }
```

- *Type:* string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput"></a>

```csharp
public string CapacityReservationIdInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomainInput`<sup>Optional</sup> <a name="ComputeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput"></a>

```csharp
public string ComputeAvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CurrentSkuInput`<sup>Optional</sup> <a name="CurrentSkuInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput"></a>

```csharp
public string CurrentSkuInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EsxiSoftwareVersionInput`<sup>Optional</sup> <a name="EsxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput"></a>

```csharp
public string EsxiSoftwareVersionInput { get; }
```

- *Type:* string

---

##### `FailedEsxiHostIdInput`<sup>Optional</sup> <a name="FailedEsxiHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput"></a>

```csharp
public string FailedEsxiHostIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostOcpuCountInput`<sup>Optional</sup> <a name="HostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput"></a>

```csharp
public double HostOcpuCountInput { get; }
```

- *Type:* double

---

##### `HostShapeNameInput`<sup>Optional</sup> <a name="HostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput"></a>

```csharp
public string HostShapeNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NextSkuInput`<sup>Optional</sup> <a name="NextSkuInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput"></a>

```csharp
public string NextSkuInput { get; }
```

- *Type:* string

---

##### `NonUpgradedEsxiHostIdInput`<sup>Optional</sup> <a name="NonUpgradedEsxiHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput"></a>

```csharp
public string NonUpgradedEsxiHostIdInput { get; }
```

- *Type:* string

---

##### `SddcIdInput`<sup>Optional</sup> <a name="SddcIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput"></a>

```csharp
public string SddcIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BillingDonorHostId`<sup>Required</sup> <a name="BillingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId"></a>

```csharp
public string BillingDonorHostId { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `CurrentSku`<sup>Required</sup> <a name="CurrentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku"></a>

```csharp
public string CurrentSku { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; }
```

- *Type:* string

---

##### `FailedEsxiHostId`<sup>Required</sup> <a name="FailedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId"></a>

```csharp
public string FailedEsxiHostId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostOcpuCount`<sup>Required</sup> <a name="HostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount"></a>

```csharp
public double HostOcpuCount { get; }
```

- *Type:* double

---

##### `HostShapeName`<sup>Required</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName"></a>

```csharp
public string HostShapeName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NextSku`<sup>Required</sup> <a name="NextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku"></a>

```csharp
public string NextSku { get; }
```

- *Type:* string

---

##### `NonUpgradedEsxiHostId`<sup>Required</sup> <a name="NonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId"></a>

```csharp
public string NonUpgradedEsxiHostId { get; }
```

- *Type:* string

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId"></a>

```csharp
public string SddcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpEsxiHostConfig <a name="OcvpEsxiHostConfig" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpEsxiHostConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BillingDonorHostId = null,
    string CapacityReservationId = null,
    string ClusterId = null,
    string ComputeAvailabilityDomain = null,
    string CurrentSku = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    string EsxiSoftwareVersion = null,
    string FailedEsxiHostId = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    double HostOcpuCount = null,
    string HostShapeName = null,
    string Id = null,
    string NextSku = null,
    string NonUpgradedEsxiHostId = null,
    string SddcId = null,
    OcvpEsxiHostTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId">BillingDonorHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku">CurrentSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId">FailedEsxiHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount">HostOcpuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName">HostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku">NextSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId">NonUpgradedEsxiHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId">SddcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BillingDonorHostId`<sup>Optional</sup> <a name="BillingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId"></a>

```csharp
public string BillingDonorHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}.

---

##### `ComputeAvailabilityDomain`<sup>Optional</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}.

---

##### `CurrentSku`<sup>Optional</sup> <a name="CurrentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku"></a>

```csharp
public string CurrentSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}.

---

##### `EsxiSoftwareVersion`<sup>Optional</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}.

---

##### `FailedEsxiHostId`<sup>Optional</sup> <a name="FailedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId"></a>

```csharp
public string FailedEsxiHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}.

---

##### `HostOcpuCount`<sup>Optional</sup> <a name="HostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount"></a>

```csharp
public double HostOcpuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}.

---

##### `HostShapeName`<sup>Optional</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName"></a>

```csharp
public string HostShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NextSku`<sup>Optional</sup> <a name="NextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku"></a>

```csharp
public string NextSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}.

---

##### `NonUpgradedEsxiHostId`<sup>Optional</sup> <a name="NonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId"></a>

```csharp
public string NonUpgradedEsxiHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}.

---

##### `SddcId`<sup>Optional</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId"></a>

```csharp
public string SddcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts"></a>

```csharp
public OcvpEsxiHostTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#timeouts OcvpEsxiHost#timeouts}

---

### OcvpEsxiHostTimeouts <a name="OcvpEsxiHostTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpEsxiHostTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OcvpEsxiHostTimeoutsOutputReference <a name="OcvpEsxiHostTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpEsxiHostTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



