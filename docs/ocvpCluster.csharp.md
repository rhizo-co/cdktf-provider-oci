# `ocvpCluster` Submodule <a name="`ocvpCluster` Submodule" id="rhizo-co-terraform-provider-oci.ocvpCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpCluster <a name="OcvpCluster" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster oci_ocvp_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpCluster(Construct Scope, string Id, OcvpClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig">OcvpClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig">OcvpClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putDatastores">PutDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDatastores">ResetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetEsxiSoftwareVersion">ResetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialCommitment">ResetInitialCommitment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialHostOcpuCount">ResetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialHostShapeName">ResetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInstanceDisplayNamePrefix">ResetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetIsShieldedInstanceEnabled">ResetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetVmwareSoftwareVersion">ResetVmwareSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetWorkloadNetworkCidr">ResetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatastores` <a name="PutDatastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putDatastores"></a>

```csharp
private void PutDatastores(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putDatastores.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(OcvpClusterNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(OcvpClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a>

---

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetCapacityReservationId"></a>

```csharp
private void ResetCapacityReservationId()
```

##### `ResetDatastores` <a name="ResetDatastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDatastores"></a>

```csharp
private void ResetDatastores()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEsxiSoftwareVersion` <a name="ResetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetEsxiSoftwareVersion"></a>

```csharp
private void ResetEsxiSoftwareVersion()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialCommitment` <a name="ResetInitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialCommitment"></a>

```csharp
private void ResetInitialCommitment()
```

##### `ResetInitialHostOcpuCount` <a name="ResetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialHostOcpuCount"></a>

```csharp
private void ResetInitialHostOcpuCount()
```

##### `ResetInitialHostShapeName` <a name="ResetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialHostShapeName"></a>

```csharp
private void ResetInitialHostShapeName()
```

##### `ResetInstanceDisplayNamePrefix` <a name="ResetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInstanceDisplayNamePrefix"></a>

```csharp
private void ResetInstanceDisplayNamePrefix()
```

##### `ResetIsShieldedInstanceEnabled` <a name="ResetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetIsShieldedInstanceEnabled"></a>

```csharp
private void ResetIsShieldedInstanceEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVmwareSoftwareVersion` <a name="ResetVmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetVmwareSoftwareVersion"></a>

```csharp
private void ResetVmwareSoftwareVersion()
```

##### `ResetWorkloadNetworkCidr` <a name="ResetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetWorkloadNetworkCidr"></a>

```csharp
private void ResetWorkloadNetworkCidr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OcvpCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OcvpCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OcvpCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OcvpCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OcvpCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList">OcvpClusterDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference">OcvpClusterNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference">OcvpClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.upgradeLicenses">UpgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList">OcvpClusterUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vsphereType">VsphereType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vsphereUpgradeObjects">VsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList">OcvpClusterVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.computeAvailabilityDomainInput">ComputeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.datastoresInput">DatastoresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiHostsCountInput">EsxiHostsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiSoftwareVersionInput">EsxiSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialCommitmentInput">InitialCommitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostOcpuCountInput">InitialHostOcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostShapeNameInput">InitialHostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.instanceDisplayNamePrefixInput">InstanceDisplayNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.isShieldedInstanceEnabledInput">IsShieldedInstanceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.sddcIdInput">SddcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vmwareSoftwareVersionInput">VmwareSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.workloadNetworkCidrInput">WorkloadNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialCommitment">InitialCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.sddcId">SddcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.actualEsxiHostsCount"></a>

```csharp
public double ActualEsxiHostsCount { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.datastores"></a>

```csharp
public OcvpClusterDatastoresList Datastores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList">OcvpClusterDatastoresList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.networkConfiguration"></a>

```csharp
public OcvpClusterNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference">OcvpClusterNetworkConfigurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeouts"></a>

```csharp
public OcvpClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference">OcvpClusterTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradeLicenses`<sup>Required</sup> <a name="UpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.upgradeLicenses"></a>

```csharp
public OcvpClusterUpgradeLicensesList UpgradeLicenses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList">OcvpClusterUpgradeLicensesList</a>

---

##### `VsphereType`<sup>Required</sup> <a name="VsphereType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vsphereType"></a>

```csharp
public string VsphereType { get; }
```

- *Type:* string

---

##### `VsphereUpgradeObjects`<sup>Required</sup> <a name="VsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vsphereUpgradeObjects"></a>

```csharp
public OcvpClusterVsphereUpgradeObjectsList VsphereUpgradeObjects { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList">OcvpClusterVsphereUpgradeObjectsList</a>

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.capacityReservationIdInput"></a>

```csharp
public string CapacityReservationIdInput { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomainInput`<sup>Optional</sup> <a name="ComputeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.computeAvailabilityDomainInput"></a>

```csharp
public string ComputeAvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `DatastoresInput`<sup>Optional</sup> <a name="DatastoresInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.datastoresInput"></a>

```csharp
public object DatastoresInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EsxiHostsCountInput`<sup>Optional</sup> <a name="EsxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiHostsCountInput"></a>

```csharp
public double EsxiHostsCountInput { get; }
```

- *Type:* double

---

##### `EsxiSoftwareVersionInput`<sup>Optional</sup> <a name="EsxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiSoftwareVersionInput"></a>

```csharp
public string EsxiSoftwareVersionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialCommitmentInput`<sup>Optional</sup> <a name="InitialCommitmentInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialCommitmentInput"></a>

```csharp
public string InitialCommitmentInput { get; }
```

- *Type:* string

---

##### `InitialHostOcpuCountInput`<sup>Optional</sup> <a name="InitialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostOcpuCountInput"></a>

```csharp
public double InitialHostOcpuCountInput { get; }
```

- *Type:* double

---

##### `InitialHostShapeNameInput`<sup>Optional</sup> <a name="InitialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostShapeNameInput"></a>

```csharp
public string InitialHostShapeNameInput { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="InstanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.instanceDisplayNamePrefixInput"></a>

```csharp
public string InstanceDisplayNamePrefixInput { get; }
```

- *Type:* string

---

##### `IsShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="IsShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.isShieldedInstanceEnabledInput"></a>

```csharp
public object IsShieldedInstanceEnabledInput { get; }
```

- *Type:* object

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.networkConfigurationInput"></a>

```csharp
public OcvpClusterNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a>

---

##### `SddcIdInput`<sup>Optional</sup> <a name="SddcIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.sddcIdInput"></a>

```csharp
public string SddcIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmwareSoftwareVersionInput`<sup>Optional</sup> <a name="VmwareSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vmwareSoftwareVersionInput"></a>

```csharp
public string VmwareSoftwareVersionInput { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidrInput`<sup>Optional</sup> <a name="WorkloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.workloadNetworkCidrInput"></a>

```csharp
public string WorkloadNetworkCidrInput { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; }
```

- *Type:* double

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialCommitment`<sup>Required</sup> <a name="InitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialCommitment"></a>

```csharp
public string InitialCommitment { get; }
```

- *Type:* string

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; }
```

- *Type:* double

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; }
```

- *Type:* string

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.isShieldedInstanceEnabled"></a>

```csharp
public object IsShieldedInstanceEnabled { get; }
```

- *Type:* object

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.sddcId"></a>

```csharp
public string SddcId { get; }
```

- *Type:* string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpClusterConfig <a name="OcvpClusterConfig" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComputeAvailabilityDomain,
    double EsxiHostsCount,
    OcvpClusterNetworkConfiguration NetworkConfiguration,
    string SddcId,
    string CapacityReservationId = null,
    object Datastores = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    string EsxiSoftwareVersion = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string InitialCommitment = null,
    double InitialHostOcpuCount = null,
    string InitialHostShapeName = null,
    string InstanceDisplayNamePrefix = null,
    object IsShieldedInstanceEnabled = null,
    OcvpClusterTimeouts Timeouts = null,
    string VmwareSoftwareVersion = null,
    string WorkloadNetworkCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#compute_availability_domain OcvpCluster#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#esxi_hosts_count OcvpCluster#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.sddcId">SddcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#sddc_id OcvpCluster#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#capacity_reservation_id OcvpCluster#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.datastores">Datastores</a></code> | <code>object</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#defined_tags OcvpCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#display_name OcvpCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#esxi_software_version OcvpCluster#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#freeform_tags OcvpCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#id OcvpCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialCommitment">InitialCommitment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_commitment OcvpCluster#initial_commitment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_host_ocpu_count OcvpCluster#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_host_shape_name OcvpCluster#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#instance_display_name_prefix OcvpCluster#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#is_shielded_instance_enabled OcvpCluster#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vmware_software_version OcvpCluster#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#workload_network_cidr OcvpCluster#workload_network_cidr}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#compute_availability_domain OcvpCluster#compute_availability_domain}.

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#esxi_hosts_count OcvpCluster#esxi_hosts_count}.

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.networkConfiguration"></a>

```csharp
public OcvpClusterNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#network_configuration OcvpCluster#network_configuration}

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.sddcId"></a>

```csharp
public string SddcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#sddc_id OcvpCluster#sddc_id}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#capacity_reservation_id OcvpCluster#capacity_reservation_id}.

---

##### `Datastores`<sup>Optional</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.datastores"></a>

```csharp
public object Datastores { get; set; }
```

- *Type:* object

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#datastores OcvpCluster#datastores}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#defined_tags OcvpCluster#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#display_name OcvpCluster#display_name}.

---

##### `EsxiSoftwareVersion`<sup>Optional</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#esxi_software_version OcvpCluster#esxi_software_version}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#freeform_tags OcvpCluster#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#id OcvpCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialCommitment`<sup>Optional</sup> <a name="InitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialCommitment"></a>

```csharp
public string InitialCommitment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_commitment OcvpCluster#initial_commitment}.

---

##### `InitialHostOcpuCount`<sup>Optional</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_host_ocpu_count OcvpCluster#initial_host_ocpu_count}.

---

##### `InitialHostShapeName`<sup>Optional</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_host_shape_name OcvpCluster#initial_host_shape_name}.

---

##### `InstanceDisplayNamePrefix`<sup>Optional</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#instance_display_name_prefix OcvpCluster#instance_display_name_prefix}.

---

##### `IsShieldedInstanceEnabled`<sup>Optional</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.isShieldedInstanceEnabled"></a>

```csharp
public object IsShieldedInstanceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#is_shielded_instance_enabled OcvpCluster#is_shielded_instance_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.timeouts"></a>

```csharp
public OcvpClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#timeouts OcvpCluster#timeouts}

---

##### `VmwareSoftwareVersion`<sup>Optional</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vmware_software_version OcvpCluster#vmware_software_version}.

---

##### `WorkloadNetworkCidr`<sup>Optional</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#workload_network_cidr OcvpCluster#workload_network_cidr}.

---

### OcvpClusterDatastores <a name="OcvpClusterDatastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterDatastores {
    string[] BlockVolumeIds,
    string DatastoreType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#block_volume_ids OcvpCluster#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.property.datastoreType">DatastoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#datastore_type OcvpCluster#datastore_type}. |

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#block_volume_ids OcvpCluster#block_volume_ids}.

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.property.datastoreType"></a>

```csharp
public string DatastoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#datastore_type OcvpCluster#datastore_type}.

---

### OcvpClusterNetworkConfiguration <a name="OcvpClusterNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterNetworkConfiguration {
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
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_vtep_vlan_id OcvpCluster#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_vtep_vlan_id OcvpCluster#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#provisioning_subnet_id OcvpCluster#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vmotion_vlan_id OcvpCluster#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vsan_vlan_id OcvpCluster#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#hcx_vlan_id OcvpCluster#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_uplink1vlan_id OcvpCluster#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_uplink2vlan_id OcvpCluster#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#provisioning_vlan_id OcvpCluster#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#replication_vlan_id OcvpCluster#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vsphere_vlan_id OcvpCluster#vsphere_vlan_id}. |

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_vtep_vlan_id OcvpCluster#nsx_edge_vtep_vlan_id}.

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_vtep_vlan_id OcvpCluster#nsx_vtep_vlan_id}.

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#provisioning_subnet_id OcvpCluster#provisioning_subnet_id}.

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vmotion_vlan_id OcvpCluster#vmotion_vlan_id}.

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vsan_vlan_id OcvpCluster#vsan_vlan_id}.

---

##### `HcxVlanId`<sup>Optional</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#hcx_vlan_id OcvpCluster#hcx_vlan_id}.

---

##### `NsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_uplink1vlan_id OcvpCluster#nsx_edge_uplink1vlan_id}.

---

##### `NsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_uplink2vlan_id OcvpCluster#nsx_edge_uplink2vlan_id}.

---

##### `ProvisioningVlanId`<sup>Optional</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#provisioning_vlan_id OcvpCluster#provisioning_vlan_id}.

---

##### `ReplicationVlanId`<sup>Optional</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#replication_vlan_id OcvpCluster#replication_vlan_id}.

---

##### `VsphereVlanId`<sup>Optional</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vsphere_vlan_id OcvpCluster#vsphere_vlan_id}.

---

### OcvpClusterTimeouts <a name="OcvpClusterTimeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#create OcvpCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#delete OcvpCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#update OcvpCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#create OcvpCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#delete OcvpCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#update OcvpCluster#update}.

---

### OcvpClusterUpgradeLicenses <a name="OcvpClusterUpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterUpgradeLicenses {

};
```


### OcvpClusterVsphereUpgradeObjects <a name="OcvpClusterVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterVsphereUpgradeObjects {

};
```


## Classes <a name="Classes" id="Classes"></a>

### OcvpClusterDatastoresList <a name="OcvpClusterDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterDatastoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.get"></a>

```csharp
private OcvpClusterDatastoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpClusterDatastoresOutputReference <a name="OcvpClusterDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterDatastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.blockVolumeIdsInput">BlockVolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.datastoreTypeInput">DatastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `BlockVolumeIdsInput`<sup>Optional</sup> <a name="BlockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```csharp
public string[] BlockVolumeIdsInput { get; }
```

- *Type:* string[]

---

##### `DatastoreTypeInput`<sup>Optional</sup> <a name="DatastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.datastoreTypeInput"></a>

```csharp
public string DatastoreTypeInput { get; }
```

- *Type:* string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; }
```

- *Type:* string[]

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.datastoreType"></a>

```csharp
public string DatastoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpClusterNetworkConfigurationOutputReference <a name="OcvpClusterNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetHcxVlanId">ResetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId">ResetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId">ResetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetProvisioningVlanId">ResetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetReplicationVlanId">ResetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetVsphereVlanId">ResetVsphereVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHcxVlanId` <a name="ResetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetHcxVlanId"></a>

```csharp
private void ResetHcxVlanId()
```

##### `ResetNsxEdgeUplink1VlanId` <a name="ResetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId"></a>

```csharp
private void ResetNsxEdgeUplink1VlanId()
```

##### `ResetNsxEdgeUplink2VlanId` <a name="ResetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId"></a>

```csharp
private void ResetNsxEdgeUplink2VlanId()
```

##### `ResetProvisioningVlanId` <a name="ResetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetProvisioningVlanId"></a>

```csharp
private void ResetProvisioningVlanId()
```

##### `ResetReplicationVlanId` <a name="ResetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetReplicationVlanId"></a>

```csharp
private void ResetReplicationVlanId()
```

##### `ResetVsphereVlanId` <a name="ResetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetVsphereVlanId"></a>

```csharp
private void ResetVsphereVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.hcxVlanIdInput">HcxVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput">NsxEdgeUplink1VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput">NsxEdgeUplink2VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput">NsxEdgeVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput">NsxVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetIdInput">ProvisioningSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanIdInput">ProvisioningVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.replicationVlanIdInput">ReplicationVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanIdInput">VmotionVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsanVlanIdInput">VsanVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanIdInput">VsphereVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HcxVlanIdInput`<sup>Optional</sup> <a name="HcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.hcxVlanIdInput"></a>

```csharp
public string HcxVlanIdInput { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput"></a>

```csharp
public string NsxEdgeUplink1VlanIdInput { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput"></a>

```csharp
public string NsxEdgeUplink2VlanIdInput { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="NsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput"></a>

```csharp
public string NsxEdgeVtepVlanIdInput { get; }
```

- *Type:* string

---

##### `NsxVtepVlanIdInput`<sup>Optional</sup> <a name="NsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput"></a>

```csharp
public string NsxVtepVlanIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetIdInput`<sup>Optional</sup> <a name="ProvisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetIdInput"></a>

```csharp
public string ProvisioningSubnetIdInput { get; }
```

- *Type:* string

---

##### `ProvisioningVlanIdInput`<sup>Optional</sup> <a name="ProvisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanIdInput"></a>

```csharp
public string ProvisioningVlanIdInput { get; }
```

- *Type:* string

---

##### `ReplicationVlanIdInput`<sup>Optional</sup> <a name="ReplicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.replicationVlanIdInput"></a>

```csharp
public string ReplicationVlanIdInput { get; }
```

- *Type:* string

---

##### `VmotionVlanIdInput`<sup>Optional</sup> <a name="VmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanIdInput"></a>

```csharp
public string VmotionVlanIdInput { get; }
```

- *Type:* string

---

##### `VsanVlanIdInput`<sup>Optional</sup> <a name="VsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsanVlanIdInput"></a>

```csharp
public string VsanVlanIdInput { get; }
```

- *Type:* string

---

##### `VsphereVlanIdInput`<sup>Optional</sup> <a name="VsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanIdInput"></a>

```csharp
public string VsphereVlanIdInput { get; }
```

- *Type:* string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; }
```

- *Type:* string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; }
```

- *Type:* string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; }
```

- *Type:* string

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; }
```

- *Type:* string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; }
```

- *Type:* string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; }
```

- *Type:* string

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public OcvpClusterNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a>

---


### OcvpClusterTimeoutsOutputReference <a name="OcvpClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OcvpClusterUpgradeLicensesList <a name="OcvpClusterUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterUpgradeLicensesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.get"></a>

```csharp
private OcvpClusterUpgradeLicensesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OcvpClusterUpgradeLicensesOutputReference <a name="OcvpClusterUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterUpgradeLicensesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.licenseKey">LicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicenses">OcvpClusterUpgradeLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LicenseKey`<sup>Required</sup> <a name="LicenseKey" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.licenseKey"></a>

```csharp
public string LicenseKey { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.internalValue"></a>

```csharp
public OcvpClusterUpgradeLicenses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicenses">OcvpClusterUpgradeLicenses</a>

---


### OcvpClusterVsphereUpgradeObjectsList <a name="OcvpClusterVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterVsphereUpgradeObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.get"></a>

```csharp
private OcvpClusterVsphereUpgradeObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OcvpClusterVsphereUpgradeObjectsOutputReference <a name="OcvpClusterVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OcvpClusterVsphereUpgradeObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.downloadLink">DownloadLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.linkDescription">LinkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjects">OcvpClusterVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownloadLink`<sup>Required</sup> <a name="DownloadLink" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```csharp
public string DownloadLink { get; }
```

- *Type:* string

---

##### `LinkDescription`<sup>Required</sup> <a name="LinkDescription" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```csharp
public string LinkDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```csharp
public OcvpClusterVsphereUpgradeObjects InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjects">OcvpClusterVsphereUpgradeObjects</a>

---



