# `blockchainBlockchainPlatform` Submodule <a name="`blockchainBlockchainPlatform` Submodule" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockchainBlockchainPlatform <a name="BlockchainBlockchainPlatform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatform(Construct Scope, string Id, BlockchainBlockchainPlatformConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig">BlockchainBlockchainPlatformConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig">BlockchainBlockchainPlatformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas">PutReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText">ResetCaCertArchiveText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId">ResetFederatedUserId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol">ResetIsByol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape">ResetLoadBalancerShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion">ResetPlatformVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs">ResetStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity">ResetTotalOcpuCapacity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplicas` <a name="PutReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas"></a>

```csharp
private void PutReplicas(BlockchainBlockchainPlatformReplicas Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts"></a>

```csharp
private void PutTimeouts(BlockchainBlockchainPlatformTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

---

##### `ResetCaCertArchiveText` <a name="ResetCaCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText"></a>

```csharp
private void ResetCaCertArchiveText()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFederatedUserId` <a name="ResetFederatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId"></a>

```csharp
private void ResetFederatedUserId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsByol` <a name="ResetIsByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol"></a>

```csharp
private void ResetIsByol()
```

##### `ResetLoadBalancerShape` <a name="ResetLoadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape"></a>

```csharp
private void ResetLoadBalancerShape()
```

##### `ResetPlatformVersion` <a name="ResetPlatformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion"></a>

```csharp
private void ResetPlatformVersion()
```

##### `ResetReplicas` <a name="ResetReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas"></a>

```csharp
private void ResetReplicas()
```

##### `ResetStorageSizeInTbs` <a name="ResetStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs"></a>

```csharp
private void ResetStorageSizeInTbs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTotalOcpuCapacity` <a name="ResetTotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity"></a>

```csharp
private void ResetTotalOcpuCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BlockchainBlockchainPlatform.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BlockchainBlockchainPlatform.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BlockchainBlockchainPlatform.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

BlockchainBlockchainPlatform.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BlockchainBlockchainPlatform to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BlockchainBlockchainPlatform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BlockchainBlockchainPlatform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails">ComponentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo">HostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd">IsMultiAd</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType">PlatformShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas">Replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion">ServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs">StorageUsedInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput">CaCertArchiveTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput">ComputeShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput">FederatedUserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput">IdcsAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput">IsByolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput">LoadBalancerShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput">PlatformRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput">PlatformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput">ReplicasInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput">StorageSizeInTbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput">TotalOcpuCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText">CaCertArchiveText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape">ComputeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId">FederatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol">IsByol</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape">LoadBalancerShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole">PlatformRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs">StorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity">TotalOcpuCapacity</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComponentDetails`<sup>Required</sup> <a name="ComponentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsList ComponentDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a>

---

##### `HostOcpuUtilizationInfo`<sup>Required</sup> <a name="HostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo"></a>

```csharp
public BlockchainBlockchainPlatformHostOcpuUtilizationInfoList HostOcpuUtilizationInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a>

---

##### `IsMultiAd`<sup>Required</sup> <a name="IsMultiAd" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd"></a>

```csharp
public IResolvable IsMultiAd { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PlatformShapeType`<sup>Required</sup> <a name="PlatformShapeType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType"></a>

```csharp
public string PlatformShapeType { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas"></a>

```csharp
public BlockchainBlockchainPlatformReplicasOutputReference Replicas { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a>

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint"></a>

```csharp
public string ServiceEndpoint { get; }
```

- *Type:* string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion"></a>

```csharp
public string ServiceVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageUsedInTbs`<sup>Required</sup> <a name="StorageUsedInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs"></a>

```csharp
public double StorageUsedInTbs { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts"></a>

```csharp
public BlockchainBlockchainPlatformTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CaCertArchiveTextInput`<sup>Optional</sup> <a name="CaCertArchiveTextInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput"></a>

```csharp
public string CaCertArchiveTextInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeShapeInput`<sup>Optional</sup> <a name="ComputeShapeInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput"></a>

```csharp
public string ComputeShapeInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FederatedUserIdInput`<sup>Optional</sup> <a name="FederatedUserIdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput"></a>

```csharp
public string FederatedUserIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdcsAccessTokenInput`<sup>Optional</sup> <a name="IdcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput"></a>

```csharp
public string IdcsAccessTokenInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsByolInput`<sup>Optional</sup> <a name="IsByolInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput"></a>

```csharp
public object IsByolInput { get; }
```

- *Type:* object

---

##### `LoadBalancerShapeInput`<sup>Optional</sup> <a name="LoadBalancerShapeInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput"></a>

```csharp
public string LoadBalancerShapeInput { get; }
```

- *Type:* string

---

##### `PlatformRoleInput`<sup>Optional</sup> <a name="PlatformRoleInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput"></a>

```csharp
public string PlatformRoleInput { get; }
```

- *Type:* string

---

##### `PlatformVersionInput`<sup>Optional</sup> <a name="PlatformVersionInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput"></a>

```csharp
public string PlatformVersionInput { get; }
```

- *Type:* string

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput"></a>

```csharp
public BlockchainBlockchainPlatformReplicas ReplicasInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `StorageSizeInTbsInput`<sup>Optional</sup> <a name="StorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput"></a>

```csharp
public double StorageSizeInTbsInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TotalOcpuCapacityInput`<sup>Optional</sup> <a name="TotalOcpuCapacityInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput"></a>

```csharp
public double TotalOcpuCapacityInput { get; }
```

- *Type:* double

---

##### `CaCertArchiveText`<sup>Required</sup> <a name="CaCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText"></a>

```csharp
public string CaCertArchiveText { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeShape`<sup>Required</sup> <a name="ComputeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape"></a>

```csharp
public string ComputeShape { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FederatedUserId`<sup>Required</sup> <a name="FederatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId"></a>

```csharp
public string FederatedUserId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken"></a>

```csharp
public string IdcsAccessToken { get; }
```

- *Type:* string

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol"></a>

```csharp
public object IsByol { get; }
```

- *Type:* object

---

##### `LoadBalancerShape`<sup>Required</sup> <a name="LoadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape"></a>

```csharp
public string LoadBalancerShape { get; }
```

- *Type:* string

---

##### `PlatformRole`<sup>Required</sup> <a name="PlatformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole"></a>

```csharp
public string PlatformRole { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `StorageSizeInTbs`<sup>Required</sup> <a name="StorageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs"></a>

```csharp
public double StorageSizeInTbs { get; }
```

- *Type:* double

---

##### `TotalOcpuCapacity`<sup>Required</sup> <a name="TotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity"></a>

```csharp
public double TotalOcpuCapacity { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockchainBlockchainPlatformComponentDetails <a name="BlockchainBlockchainPlatformComponentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetails {

};
```


### BlockchainBlockchainPlatformComponentDetailsOsns <a name="BlockchainBlockchainPlatformComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsOsns {

};
```


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam {

};
```


### BlockchainBlockchainPlatformComponentDetailsPeers <a name="BlockchainBlockchainPlatformComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsPeers {

};
```


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam {

};
```


### BlockchainBlockchainPlatformConfig <a name="BlockchainBlockchainPlatformConfig" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ComputeShape,
    string DisplayName,
    string IdcsAccessToken,
    string PlatformRole,
    string CaCertArchiveText = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string FederatedUserId = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsByol = null,
    string LoadBalancerShape = null,
    string PlatformVersion = null,
    BlockchainBlockchainPlatformReplicas Replicas = null,
    double StorageSizeInTbs = null,
    BlockchainBlockchainPlatformTimeouts Timeouts = null,
    double TotalOcpuCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape">ComputeShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole">PlatformRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText">CaCertArchiveText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId">FederatedUserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol">IsByol</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape">LoadBalancerShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas">Replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs">StorageSizeInTbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity">TotalOcpuCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}.

---

##### `ComputeShape`<sup>Required</sup> <a name="ComputeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape"></a>

```csharp
public string ComputeShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}.

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken"></a>

```csharp
public string IdcsAccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}.

---

##### `PlatformRole`<sup>Required</sup> <a name="PlatformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole"></a>

```csharp
public string PlatformRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}.

---

##### `CaCertArchiveText`<sup>Optional</sup> <a name="CaCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText"></a>

```csharp
public string CaCertArchiveText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}.

---

##### `FederatedUserId`<sup>Optional</sup> <a name="FederatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId"></a>

```csharp
public string FederatedUserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsByol`<sup>Optional</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol"></a>

```csharp
public object IsByol { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}.

---

##### `LoadBalancerShape`<sup>Optional</sup> <a name="LoadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape"></a>

```csharp
public string LoadBalancerShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}.

---

##### `PlatformVersion`<sup>Optional</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}.

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas"></a>

```csharp
public BlockchainBlockchainPlatformReplicas Replicas { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#replicas BlockchainBlockchainPlatform#replicas}

---

##### `StorageSizeInTbs`<sup>Optional</sup> <a name="StorageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs"></a>

```csharp
public double StorageSizeInTbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts"></a>

```csharp
public BlockchainBlockchainPlatformTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#timeouts BlockchainBlockchainPlatform#timeouts}

---

##### `TotalOcpuCapacity`<sup>Optional</sup> <a name="TotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity"></a>

```csharp
public double TotalOcpuCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}.

---

### BlockchainBlockchainPlatformHostOcpuUtilizationInfo <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformHostOcpuUtilizationInfo {

};
```


### BlockchainBlockchainPlatformReplicas <a name="BlockchainBlockchainPlatformReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformReplicas {
    double CaCount = null,
    double ConsoleCount = null,
    double ProxyCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount">CaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount">ConsoleCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount">ProxyCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}. |

---

##### `CaCount`<sup>Optional</sup> <a name="CaCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount"></a>

```csharp
public double CaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}.

---

##### `ConsoleCount`<sup>Optional</sup> <a name="ConsoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount"></a>

```csharp
public double ConsoleCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}.

---

##### `ProxyCount`<sup>Optional</sup> <a name="ProxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount"></a>

```csharp
public double ProxyCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}.

---

### BlockchainBlockchainPlatformTimeouts <a name="BlockchainBlockchainPlatformTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockchainBlockchainPlatformComponentDetailsList <a name="BlockchainBlockchainPlatformComponentDetailsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get"></a>

```csharp
private BlockchainBlockchainPlatformComponentDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsOsnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get"></a>

```csharp
private BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```csharp
private BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```csharp
public double OcpuAllocationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad">Ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey">OsnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad"></a>

```csharp
public string Ad { get; }
```

- *Type:* string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList OcpuAllocationParam { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `OsnKey`<sup>Required</sup> <a name="OsnKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey"></a>

```csharp
public string OsnKey { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsOsns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a>

---


### BlockchainBlockchainPlatformComponentDetailsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns">Osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers">Peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Osns`<sup>Required</sup> <a name="Osns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsOsnsList Osns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a>

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsPeersList Peers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersList <a name="BlockchainBlockchainPlatformComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get"></a>

```csharp
private BlockchainBlockchainPlatformComponentDetailsPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get"></a>

```csharp
private BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```csharp
public double OcpuAllocationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformComponentDetailsPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad">Ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey">PeerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad"></a>

```csharp
public string Ad { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList OcpuAllocationParam { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `PeerKey`<sup>Required</sup> <a name="PeerKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey"></a>

```csharp
public string PeerKey { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue"></a>

```csharp
public BlockchainBlockchainPlatformComponentDetailsPeers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a>

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoList <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformHostOcpuUtilizationInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get"></a>

```csharp
private BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">OcpuCapacityNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">OcpuUtilizationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `OcpuCapacityNumber`<sup>Required</sup> <a name="OcpuCapacityNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```csharp
public double OcpuCapacityNumber { get; }
```

- *Type:* double

---

##### `OcpuUtilizationNumber`<sup>Required</sup> <a name="OcpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```csharp
public double OcpuUtilizationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```csharp
public BlockchainBlockchainPlatformHostOcpuUtilizationInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a>

---


### BlockchainBlockchainPlatformReplicasOutputReference <a name="BlockchainBlockchainPlatformReplicasOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount">ResetCaCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount">ResetConsoleCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount">ResetProxyCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCount` <a name="ResetCaCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount"></a>

```csharp
private void ResetCaCount()
```

##### `ResetConsoleCount` <a name="ResetConsoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount"></a>

```csharp
private void ResetConsoleCount()
```

##### `ResetProxyCount` <a name="ResetProxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount"></a>

```csharp
private void ResetProxyCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput">CaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput">ConsoleCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput">ProxyCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount">CaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount">ConsoleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount">ProxyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCountInput`<sup>Optional</sup> <a name="CaCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput"></a>

```csharp
public double CaCountInput { get; }
```

- *Type:* double

---

##### `ConsoleCountInput`<sup>Optional</sup> <a name="ConsoleCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput"></a>

```csharp
public double ConsoleCountInput { get; }
```

- *Type:* double

---

##### `ProxyCountInput`<sup>Optional</sup> <a name="ProxyCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput"></a>

```csharp
public double ProxyCountInput { get; }
```

- *Type:* double

---

##### `CaCount`<sup>Required</sup> <a name="CaCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount"></a>

```csharp
public double CaCount { get; }
```

- *Type:* double

---

##### `ConsoleCount`<sup>Required</sup> <a name="ConsoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount"></a>

```csharp
public double ConsoleCount { get; }
```

- *Type:* double

---

##### `ProxyCount`<sup>Required</sup> <a name="ProxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount"></a>

```csharp
public double ProxyCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue"></a>

```csharp
public BlockchainBlockchainPlatformReplicas InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---


### BlockchainBlockchainPlatformTimeoutsOutputReference <a name="BlockchainBlockchainPlatformTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new BlockchainBlockchainPlatformTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



