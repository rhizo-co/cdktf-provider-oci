# `coreVirtualCircuit` Submodule <a name="`coreVirtualCircuit` Submodule" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVirtualCircuit <a name="CoreVirtualCircuit" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit oci_core_virtual_circuit}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuit(Construct Scope, string Id, CoreVirtualCircuitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig">CoreVirtualCircuitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig">CoreVirtualCircuitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings">PutCrossConnectMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes">PutPublicPrefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBandwidthShapeName">ResetBandwidthShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBgpAdminState">ResetBgpAdminState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCrossConnectMappings">ResetCrossConnectMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerAsn">ResetCustomerAsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerBgpAsn">ResetCustomerBgpAsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetGatewayId">ResetGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIpMtu">ResetIpMtu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsBfdEnabled">ResetIsBfdEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsTransportMode">ResetIsTransportMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceId">ResetProviderServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceKeyName">ResetProviderServiceKeyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetPublicPrefixes">ResetPublicPrefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRoutingPolicy">ResetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCrossConnectMappings` <a name="PutCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings"></a>

```csharp
private void PutCrossConnectMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings.parameter.value"></a>

- *Type:* object

---

##### `PutPublicPrefixes` <a name="PutPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes"></a>

```csharp
private void PutPublicPrefixes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreVirtualCircuitTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

---

##### `ResetBandwidthShapeName` <a name="ResetBandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBandwidthShapeName"></a>

```csharp
private void ResetBandwidthShapeName()
```

##### `ResetBgpAdminState` <a name="ResetBgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBgpAdminState"></a>

```csharp
private void ResetBgpAdminState()
```

##### `ResetCrossConnectMappings` <a name="ResetCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCrossConnectMappings"></a>

```csharp
private void ResetCrossConnectMappings()
```

##### `ResetCustomerAsn` <a name="ResetCustomerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerAsn"></a>

```csharp
private void ResetCustomerAsn()
```

##### `ResetCustomerBgpAsn` <a name="ResetCustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerBgpAsn"></a>

```csharp
private void ResetCustomerBgpAsn()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetGatewayId` <a name="ResetGatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetGatewayId"></a>

```csharp
private void ResetGatewayId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpMtu` <a name="ResetIpMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIpMtu"></a>

```csharp
private void ResetIpMtu()
```

##### `ResetIsBfdEnabled` <a name="ResetIsBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsBfdEnabled"></a>

```csharp
private void ResetIsBfdEnabled()
```

##### `ResetIsTransportMode` <a name="ResetIsTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsTransportMode"></a>

```csharp
private void ResetIsTransportMode()
```

##### `ResetProviderServiceId` <a name="ResetProviderServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceId"></a>

```csharp
private void ResetProviderServiceId()
```

##### `ResetProviderServiceKeyName` <a name="ResetProviderServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceKeyName"></a>

```csharp
private void ResetProviderServiceKeyName()
```

##### `ResetPublicPrefixes` <a name="ResetPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetPublicPrefixes"></a>

```csharp
private void ResetPublicPrefixes()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoutingPolicy` <a name="ResetRoutingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRoutingPolicy"></a>

```csharp
private void ResetRoutingPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVirtualCircuit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVirtualCircuit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVirtualCircuit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVirtualCircuit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreVirtualCircuit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreVirtualCircuit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreVirtualCircuit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpIpv6SessionState">BgpIpv6SessionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpManagement">BgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpSessionState">BgpSessionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappings">CrossConnectMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList">CoreVirtualCircuitCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerState">ProviderState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixes">PublicPrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList">CoreVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.referenceComment">ReferenceComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference">CoreVirtualCircuitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.virtualCircuitRedundancyMetadata">VirtualCircuitRedundancyMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList">CoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeNameInput">BandwidthShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminStateInput">BgpAdminStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappingsInput">CrossConnectMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsnInput">CustomerAsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsnInput">CustomerBgpAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtuInput">IpMtuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabledInput">IsBfdEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportModeInput">IsTransportModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceIdInput">ProviderServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyNameInput">ProviderServiceKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixesInput">PublicPrefixesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicyInput">RoutingPolicyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeName">BandwidthShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminState">BgpAdminState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsn">CustomerAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtu">IpMtu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabled">IsBfdEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportMode">IsTransportMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceId">ProviderServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyName">ProviderServiceKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicy">RoutingPolicy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BgpIpv6SessionState`<sup>Required</sup> <a name="BgpIpv6SessionState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpIpv6SessionState"></a>

```csharp
public string BgpIpv6SessionState { get; }
```

- *Type:* string

---

##### `BgpManagement`<sup>Required</sup> <a name="BgpManagement" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpManagement"></a>

```csharp
public string BgpManagement { get; }
```

- *Type:* string

---

##### `BgpSessionState`<sup>Required</sup> <a name="BgpSessionState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpSessionState"></a>

```csharp
public string BgpSessionState { get; }
```

- *Type:* string

---

##### `CrossConnectMappings`<sup>Required</sup> <a name="CrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappings"></a>

```csharp
public CoreVirtualCircuitCrossConnectMappingsList CrossConnectMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList">CoreVirtualCircuitCrossConnectMappingsList</a>

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.oracleBgpAsn"></a>

```csharp
public double OracleBgpAsn { get; }
```

- *Type:* double

---

##### `ProviderState`<sup>Required</sup> <a name="ProviderState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerState"></a>

```csharp
public string ProviderState { get; }
```

- *Type:* string

---

##### `PublicPrefixes`<sup>Required</sup> <a name="PublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixes"></a>

```csharp
public CoreVirtualCircuitPublicPrefixesList PublicPrefixes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList">CoreVirtualCircuitPublicPrefixesList</a>

---

##### `ReferenceComment`<sup>Required</sup> <a name="ReferenceComment" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.referenceComment"></a>

```csharp
public string ReferenceComment { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeouts"></a>

```csharp
public CoreVirtualCircuitTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference">CoreVirtualCircuitTimeoutsOutputReference</a>

---

##### `VirtualCircuitRedundancyMetadata`<sup>Required</sup> <a name="VirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.virtualCircuitRedundancyMetadata"></a>

```csharp
public CoreVirtualCircuitVirtualCircuitRedundancyMetadataList VirtualCircuitRedundancyMetadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList">CoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a>

---

##### `BandwidthShapeNameInput`<sup>Optional</sup> <a name="BandwidthShapeNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeNameInput"></a>

```csharp
public string BandwidthShapeNameInput { get; }
```

- *Type:* string

---

##### `BgpAdminStateInput`<sup>Optional</sup> <a name="BgpAdminStateInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminStateInput"></a>

```csharp
public string BgpAdminStateInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CrossConnectMappingsInput`<sup>Optional</sup> <a name="CrossConnectMappingsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappingsInput"></a>

```csharp
public object CrossConnectMappingsInput { get; }
```

- *Type:* object

---

##### `CustomerAsnInput`<sup>Optional</sup> <a name="CustomerAsnInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsnInput"></a>

```csharp
public string CustomerAsnInput { get; }
```

- *Type:* string

---

##### `CustomerBgpAsnInput`<sup>Optional</sup> <a name="CustomerBgpAsnInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsnInput"></a>

```csharp
public double CustomerBgpAsnInput { get; }
```

- *Type:* double

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpMtuInput`<sup>Optional</sup> <a name="IpMtuInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtuInput"></a>

```csharp
public string IpMtuInput { get; }
```

- *Type:* string

---

##### `IsBfdEnabledInput`<sup>Optional</sup> <a name="IsBfdEnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabledInput"></a>

```csharp
public object IsBfdEnabledInput { get; }
```

- *Type:* object

---

##### `IsTransportModeInput`<sup>Optional</sup> <a name="IsTransportModeInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportModeInput"></a>

```csharp
public object IsTransportModeInput { get; }
```

- *Type:* object

---

##### `ProviderServiceIdInput`<sup>Optional</sup> <a name="ProviderServiceIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceIdInput"></a>

```csharp
public string ProviderServiceIdInput { get; }
```

- *Type:* string

---

##### `ProviderServiceKeyNameInput`<sup>Optional</sup> <a name="ProviderServiceKeyNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyNameInput"></a>

```csharp
public string ProviderServiceKeyNameInput { get; }
```

- *Type:* string

---

##### `PublicPrefixesInput`<sup>Optional</sup> <a name="PublicPrefixesInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixesInput"></a>

```csharp
public object PublicPrefixesInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoutingPolicyInput`<sup>Optional</sup> <a name="RoutingPolicyInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicyInput"></a>

```csharp
public string[] RoutingPolicyInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `BandwidthShapeName`<sup>Required</sup> <a name="BandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeName"></a>

```csharp
public string BandwidthShapeName { get; }
```

- *Type:* string

---

##### `BgpAdminState`<sup>Required</sup> <a name="BgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminState"></a>

```csharp
public string BgpAdminState { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsn"></a>

```csharp
public string CustomerAsn { get; }
```

- *Type:* string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsn"></a>

```csharp
public double CustomerBgpAsn { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpMtu`<sup>Required</sup> <a name="IpMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtu"></a>

```csharp
public string IpMtu { get; }
```

- *Type:* string

---

##### `IsBfdEnabled`<sup>Required</sup> <a name="IsBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabled"></a>

```csharp
public object IsBfdEnabled { get; }
```

- *Type:* object

---

##### `IsTransportMode`<sup>Required</sup> <a name="IsTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportMode"></a>

```csharp
public object IsTransportMode { get; }
```

- *Type:* object

---

##### `ProviderServiceId`<sup>Required</sup> <a name="ProviderServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceId"></a>

```csharp
public string ProviderServiceId { get; }
```

- *Type:* string

---

##### `ProviderServiceKeyName`<sup>Required</sup> <a name="ProviderServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyName"></a>

```csharp
public string ProviderServiceKeyName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoutingPolicy`<sup>Required</sup> <a name="RoutingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicy"></a>

```csharp
public string[] RoutingPolicy { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVirtualCircuitConfig <a name="CoreVirtualCircuitConfig" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Type,
    string BandwidthShapeName = null,
    string BgpAdminState = null,
    object CrossConnectMappings = null,
    string CustomerAsn = null,
    double CustomerBgpAsn = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string GatewayId = null,
    string Id = null,
    string IpMtu = null,
    object IsBfdEnabled = null,
    object IsTransportMode = null,
    string ProviderServiceId = null,
    string ProviderServiceKeyName = null,
    object PublicPrefixes = null,
    string Region = null,
    string[] RoutingPolicy = null,
    CoreVirtualCircuitTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bandwidthShapeName">BandwidthShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bgpAdminState">BgpAdminState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.crossConnectMappings">CrossConnectMappings</a></code> | <code>object</code> | cross_connect_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerAsn">CustomerAsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.ipMtu">IpMtu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isBfdEnabled">IsBfdEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isTransportMode">IsTransportMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceId">ProviderServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceKeyName">ProviderServiceKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.publicPrefixes">PublicPrefixes</a></code> | <code>object</code> | public_prefixes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.routingPolicy">RoutingPolicy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}.

---

##### `BandwidthShapeName`<sup>Optional</sup> <a name="BandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bandwidthShapeName"></a>

```csharp
public string BandwidthShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}.

---

##### `BgpAdminState`<sup>Optional</sup> <a name="BgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bgpAdminState"></a>

```csharp
public string BgpAdminState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}.

---

##### `CrossConnectMappings`<sup>Optional</sup> <a name="CrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.crossConnectMappings"></a>

```csharp
public object CrossConnectMappings { get; set; }
```

- *Type:* object

cross_connect_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_mappings CoreVirtualCircuit#cross_connect_mappings}

---

##### `CustomerAsn`<sup>Optional</sup> <a name="CustomerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerAsn"></a>

```csharp
public string CustomerAsn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}.

---

##### `CustomerBgpAsn`<sup>Optional</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerBgpAsn"></a>

```csharp
public double CustomerBgpAsn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}.

---

##### `GatewayId`<sup>Optional</sup> <a name="GatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpMtu`<sup>Optional</sup> <a name="IpMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.ipMtu"></a>

```csharp
public string IpMtu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}.

---

##### `IsBfdEnabled`<sup>Optional</sup> <a name="IsBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isBfdEnabled"></a>

```csharp
public object IsBfdEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}.

---

##### `IsTransportMode`<sup>Optional</sup> <a name="IsTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isTransportMode"></a>

```csharp
public object IsTransportMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}.

---

##### `ProviderServiceId`<sup>Optional</sup> <a name="ProviderServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceId"></a>

```csharp
public string ProviderServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}.

---

##### `ProviderServiceKeyName`<sup>Optional</sup> <a name="ProviderServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceKeyName"></a>

```csharp
public string ProviderServiceKeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}.

---

##### `PublicPrefixes`<sup>Optional</sup> <a name="PublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.publicPrefixes"></a>

```csharp
public object PublicPrefixes { get; set; }
```

- *Type:* object

public_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#public_prefixes CoreVirtualCircuit#public_prefixes}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}.

---

##### `RoutingPolicy`<sup>Optional</sup> <a name="RoutingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.routingPolicy"></a>

```csharp
public string[] RoutingPolicy { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.timeouts"></a>

```csharp
public CoreVirtualCircuitTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#timeouts CoreVirtualCircuit#timeouts}

---

### CoreVirtualCircuitCrossConnectMappings <a name="CoreVirtualCircuitCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitCrossConnectMappings {
    string BgpMd5AuthKey = null,
    string CrossConnectOrCrossConnectGroupId = null,
    string CustomerBgpPeeringIp = null,
    string CustomerBgpPeeringIpv6 = null,
    string OracleBgpPeeringIp = null,
    string OracleBgpPeeringIpv6 = null,
    double Vlan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.bgpMd5AuthKey">BgpMd5AuthKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.crossConnectOrCrossConnectGroupId">CrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIp">CustomerBgpPeeringIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIpv6">CustomerBgpPeeringIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIp">OracleBgpPeeringIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIpv6">OracleBgpPeeringIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.vlan">Vlan</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}. |

---

##### `BgpMd5AuthKey`<sup>Optional</sup> <a name="BgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.bgpMd5AuthKey"></a>

```csharp
public string BgpMd5AuthKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}.

---

##### `CrossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="CrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.crossConnectOrCrossConnectGroupId"></a>

```csharp
public string CrossConnectOrCrossConnectGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}.

---

##### `CustomerBgpPeeringIp`<sup>Optional</sup> <a name="CustomerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIp"></a>

```csharp
public string CustomerBgpPeeringIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}.

---

##### `CustomerBgpPeeringIpv6`<sup>Optional</sup> <a name="CustomerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIpv6"></a>

```csharp
public string CustomerBgpPeeringIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}.

---

##### `OracleBgpPeeringIp`<sup>Optional</sup> <a name="OracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIp"></a>

```csharp
public string OracleBgpPeeringIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}.

---

##### `OracleBgpPeeringIpv6`<sup>Optional</sup> <a name="OracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIpv6"></a>

```csharp
public string OracleBgpPeeringIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}.

---

##### `Vlan`<sup>Optional</sup> <a name="Vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.vlan"></a>

```csharp
public double Vlan { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}.

---

### CoreVirtualCircuitPublicPrefixes <a name="CoreVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitPublicPrefixes {
    string CidrBlock
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}. |

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}.

---

### CoreVirtualCircuitTimeouts <a name="CoreVirtualCircuitTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}.

---

### CoreVirtualCircuitVirtualCircuitRedundancyMetadata <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitVirtualCircuitRedundancyMetadata {

};
```


## Classes <a name="Classes" id="Classes"></a>

### CoreVirtualCircuitCrossConnectMappingsList <a name="CoreVirtualCircuitCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitCrossConnectMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get"></a>

```csharp
private CoreVirtualCircuitCrossConnectMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVirtualCircuitCrossConnectMappingsOutputReference <a name="CoreVirtualCircuitCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitCrossConnectMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetBgpMd5AuthKey">ResetBgpMd5AuthKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCrossConnectOrCrossConnectGroupId">ResetCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIp">ResetCustomerBgpPeeringIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIpv6">ResetCustomerBgpPeeringIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIp">ResetOracleBgpPeeringIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIpv6">ResetOracleBgpPeeringIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetVlan">ResetVlan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBgpMd5AuthKey` <a name="ResetBgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetBgpMd5AuthKey"></a>

```csharp
private void ResetBgpMd5AuthKey()
```

##### `ResetCrossConnectOrCrossConnectGroupId` <a name="ResetCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCrossConnectOrCrossConnectGroupId"></a>

```csharp
private void ResetCrossConnectOrCrossConnectGroupId()
```

##### `ResetCustomerBgpPeeringIp` <a name="ResetCustomerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIp"></a>

```csharp
private void ResetCustomerBgpPeeringIp()
```

##### `ResetCustomerBgpPeeringIpv6` <a name="ResetCustomerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIpv6"></a>

```csharp
private void ResetCustomerBgpPeeringIpv6()
```

##### `ResetOracleBgpPeeringIp` <a name="ResetOracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIp"></a>

```csharp
private void ResetOracleBgpPeeringIp()
```

##### `ResetOracleBgpPeeringIpv6` <a name="ResetOracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIpv6"></a>

```csharp
private void ResetOracleBgpPeeringIpv6()
```

##### `ResetVlan` <a name="ResetVlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetVlan"></a>

```csharp
private void ResetVlan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKeyInput">BgpMd5AuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupIdInput">CrossConnectOrCrossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpInput">CustomerBgpPeeringIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6Input">CustomerBgpPeeringIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpInput">OracleBgpPeeringIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6Input">OracleBgpPeeringIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlanInput">VlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">BgpMd5AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">CrossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">CustomerBgpPeeringIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">CustomerBgpPeeringIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">OracleBgpPeeringIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">OracleBgpPeeringIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpMd5AuthKeyInput`<sup>Optional</sup> <a name="BgpMd5AuthKeyInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKeyInput"></a>

```csharp
public string BgpMd5AuthKeyInput { get; }
```

- *Type:* string

---

##### `CrossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="CrossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupIdInput"></a>

```csharp
public string CrossConnectOrCrossConnectGroupIdInput { get; }
```

- *Type:* string

---

##### `CustomerBgpPeeringIpInput`<sup>Optional</sup> <a name="CustomerBgpPeeringIpInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpInput"></a>

```csharp
public string CustomerBgpPeeringIpInput { get; }
```

- *Type:* string

---

##### `CustomerBgpPeeringIpv6Input`<sup>Optional</sup> <a name="CustomerBgpPeeringIpv6Input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6Input"></a>

```csharp
public string CustomerBgpPeeringIpv6Input { get; }
```

- *Type:* string

---

##### `OracleBgpPeeringIpInput`<sup>Optional</sup> <a name="OracleBgpPeeringIpInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpInput"></a>

```csharp
public string OracleBgpPeeringIpInput { get; }
```

- *Type:* string

---

##### `OracleBgpPeeringIpv6Input`<sup>Optional</sup> <a name="OracleBgpPeeringIpv6Input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6Input"></a>

```csharp
public string OracleBgpPeeringIpv6Input { get; }
```

- *Type:* string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlanInput"></a>

```csharp
public double VlanInput { get; }
```

- *Type:* double

---

##### `BgpMd5AuthKey`<sup>Required</sup> <a name="BgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```csharp
public string BgpMd5AuthKey { get; }
```

- *Type:* string

---

##### `CrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="CrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```csharp
public string CrossConnectOrCrossConnectGroupId { get; }
```

- *Type:* string

---

##### `CustomerBgpPeeringIp`<sup>Required</sup> <a name="CustomerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```csharp
public string CustomerBgpPeeringIp { get; }
```

- *Type:* string

---

##### `CustomerBgpPeeringIpv6`<sup>Required</sup> <a name="CustomerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```csharp
public string CustomerBgpPeeringIpv6 { get; }
```

- *Type:* string

---

##### `OracleBgpPeeringIp`<sup>Required</sup> <a name="OracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```csharp
public string OracleBgpPeeringIp { get; }
```

- *Type:* string

---

##### `OracleBgpPeeringIpv6`<sup>Required</sup> <a name="OracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```csharp
public string OracleBgpPeeringIpv6 { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVirtualCircuitPublicPrefixesList <a name="CoreVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitPublicPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get"></a>

```csharp
private CoreVirtualCircuitPublicPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVirtualCircuitPublicPrefixesOutputReference <a name="CoreVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitPublicPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVirtualCircuitTimeoutsOutputReference <a name="CoreVirtualCircuitTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVirtualCircuitVirtualCircuitRedundancyMetadataList <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitVirtualCircuitRedundancyMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get"></a>

```csharp
private CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">ConfiguredRedundancyLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">Ipv4BgpSessionRedundancyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">Ipv6BgpSessionRedundancyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata">CoreVirtualCircuitVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfiguredRedundancyLevel`<sup>Required</sup> <a name="ConfiguredRedundancyLevel" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```csharp
public string ConfiguredRedundancyLevel { get; }
```

- *Type:* string

---

##### `Ipv4BgpSessionRedundancyStatus`<sup>Required</sup> <a name="Ipv4BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```csharp
public string Ipv4BgpSessionRedundancyStatus { get; }
```

- *Type:* string

---

##### `Ipv6BgpSessionRedundancyStatus`<sup>Required</sup> <a name="Ipv6BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```csharp
public string Ipv6BgpSessionRedundancyStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```csharp
public CoreVirtualCircuitVirtualCircuitRedundancyMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata">CoreVirtualCircuitVirtualCircuitRedundancyMetadata</a>

---



