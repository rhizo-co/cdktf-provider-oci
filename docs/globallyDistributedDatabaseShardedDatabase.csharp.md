# `globallyDistributedDatabaseShardedDatabase` Submodule <a name="`globallyDistributedDatabaseShardedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GloballyDistributedDatabaseShardedDatabase <a name="GloballyDistributedDatabaseShardedDatabase" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabase(Construct Scope, string Id, GloballyDistributedDatabaseShardedDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig">GloballyDistributedDatabaseShardedDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig">GloballyDistributedDatabaseShardedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putCatalogDetails">PutCatalogDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putPatchOperations">PutPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putShardDetails">PutShardDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetCaSignedCertificate">ResetCaSignedCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetChunks">ResetChunks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetClusterCertificateCommonName">ResetClusterCertificateCommonName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTrigger">ResetConfigureGsmsTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTriggerIsLatestGsmImage">ResetConfigureGsmsTriggerIsLatestGsmImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTriggerOldGsmNames">ResetConfigureGsmsTriggerOldGsmNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureShardingTrigger">ResetConfigureShardingTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetDownloadGsmCertificateSigningRequestTrigger">ResetDownloadGsmCertificateSigningRequestTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetFetchConnectionStringTrigger">ResetFetchConnectionStringTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateGsmCertificateSigningRequestTrigger">ResetGenerateGsmCertificateSigningRequestTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateWalletPassword">ResetGenerateWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateWalletTrigger">ResetGenerateWalletTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetPatchOperations">ResetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationFactor">ResetReplicationFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationMethod">ResetReplicationMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationUnit">ResetReplicationUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetStartDatabaseTrigger">ResetStartDatabaseTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetStopDatabaseTrigger">ResetStopDatabaseTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetUploadSignedCertificateAndGenerateWalletTrigger">ResetUploadSignedCertificateAndGenerateWalletTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetValidateNetworkTrigger">ResetValidateNetworkTrigger</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCatalogDetails` <a name="PutCatalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putCatalogDetails"></a>

```csharp
private void PutCatalogDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putCatalogDetails.parameter.value"></a>

- *Type:* object

---

##### `PutPatchOperations` <a name="PutPatchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putPatchOperations"></a>

```csharp
private void PutPatchOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putPatchOperations.parameter.value"></a>

- *Type:* object

---

##### `PutShardDetails` <a name="PutShardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putShardDetails"></a>

```csharp
private void PutShardDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putShardDetails.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(GloballyDistributedDatabaseShardedDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a>

---

##### `ResetCaSignedCertificate` <a name="ResetCaSignedCertificate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetCaSignedCertificate"></a>

```csharp
private void ResetCaSignedCertificate()
```

##### `ResetChunks` <a name="ResetChunks" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetChunks"></a>

```csharp
private void ResetChunks()
```

##### `ResetClusterCertificateCommonName` <a name="ResetClusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetClusterCertificateCommonName"></a>

```csharp
private void ResetClusterCertificateCommonName()
```

##### `ResetConfigureGsmsTrigger` <a name="ResetConfigureGsmsTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTrigger"></a>

```csharp
private void ResetConfigureGsmsTrigger()
```

##### `ResetConfigureGsmsTriggerIsLatestGsmImage` <a name="ResetConfigureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTriggerIsLatestGsmImage"></a>

```csharp
private void ResetConfigureGsmsTriggerIsLatestGsmImage()
```

##### `ResetConfigureGsmsTriggerOldGsmNames` <a name="ResetConfigureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTriggerOldGsmNames"></a>

```csharp
private void ResetConfigureGsmsTriggerOldGsmNames()
```

##### `ResetConfigureShardingTrigger` <a name="ResetConfigureShardingTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureShardingTrigger"></a>

```csharp
private void ResetConfigureShardingTrigger()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDownloadGsmCertificateSigningRequestTrigger` <a name="ResetDownloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetDownloadGsmCertificateSigningRequestTrigger"></a>

```csharp
private void ResetDownloadGsmCertificateSigningRequestTrigger()
```

##### `ResetFetchConnectionStringTrigger` <a name="ResetFetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetFetchConnectionStringTrigger"></a>

```csharp
private void ResetFetchConnectionStringTrigger()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetGenerateGsmCertificateSigningRequestTrigger` <a name="ResetGenerateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateGsmCertificateSigningRequestTrigger"></a>

```csharp
private void ResetGenerateGsmCertificateSigningRequestTrigger()
```

##### `ResetGenerateWalletPassword` <a name="ResetGenerateWalletPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateWalletPassword"></a>

```csharp
private void ResetGenerateWalletPassword()
```

##### `ResetGenerateWalletTrigger` <a name="ResetGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateWalletTrigger"></a>

```csharp
private void ResetGenerateWalletTrigger()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPatchOperations` <a name="ResetPatchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetPatchOperations"></a>

```csharp
private void ResetPatchOperations()
```

##### `ResetReplicationFactor` <a name="ResetReplicationFactor" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationFactor"></a>

```csharp
private void ResetReplicationFactor()
```

##### `ResetReplicationMethod` <a name="ResetReplicationMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationMethod"></a>

```csharp
private void ResetReplicationMethod()
```

##### `ResetReplicationUnit` <a name="ResetReplicationUnit" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationUnit"></a>

```csharp
private void ResetReplicationUnit()
```

##### `ResetStartDatabaseTrigger` <a name="ResetStartDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetStartDatabaseTrigger"></a>

```csharp
private void ResetStartDatabaseTrigger()
```

##### `ResetStopDatabaseTrigger` <a name="ResetStopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetStopDatabaseTrigger"></a>

```csharp
private void ResetStopDatabaseTrigger()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUploadSignedCertificateAndGenerateWalletTrigger` <a name="ResetUploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetUploadSignedCertificateAndGenerateWalletTrigger"></a>

```csharp
private void ResetUploadSignedCertificateAndGenerateWalletTrigger()
```

##### `ResetValidateNetworkTrigger` <a name="ResetValidateNetworkTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetValidateNetworkTrigger"></a>

```csharp
private void ResetValidateNetworkTrigger()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GloballyDistributedDatabaseShardedDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GloballyDistributedDatabaseShardedDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GloballyDistributedDatabaseShardedDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GloballyDistributedDatabaseShardedDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GloballyDistributedDatabaseShardedDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GloballyDistributedDatabaseShardedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GloballyDistributedDatabaseShardedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.catalogDetails">CatalogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList">GloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.gsms">Gsms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList">GloballyDistributedDatabaseShardedDatabaseGsmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList">GloballyDistributedDatabaseShardedDatabasePatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardDetails">ShardDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList">GloballyDistributedDatabaseShardedDatabaseShardDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId">ShardedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference">GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.caSignedCertificateInput">CaSignedCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.catalogDetailsInput">CatalogDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.chunksInput">ChunksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonNameInput">ClusterCertificateCommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerInput">ConfigureGsmsTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImageInput">ConfigureGsmsTriggerIsLatestGsmImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNamesInput">ConfigureGsmsTriggerOldGsmNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureShardingTriggerInput">ConfigureShardingTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbDeploymentTypeInput">DbDeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTriggerInput">DownloadGsmCertificateSigningRequestTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTriggerInput">FetchConnectionStringTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTriggerInput">GenerateGsmCertificateSigningRequestTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletPasswordInput">GenerateWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletTriggerInput">GenerateWalletTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortInput">ListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortTlsInput">ListenerPortTlsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortLocalInput">OnsPortLocalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortRemoteInput">OnsPortRemoteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.patchOperationsInput">PatchOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationFactorInput">ReplicationFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationMethodInput">ReplicationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationUnitInput">ReplicationUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardDetailsInput">ShardDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardingMethodInput">ShardingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.startDatabaseTriggerInput">StartDatabaseTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTriggerInput">StopDatabaseTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTriggerInput">UploadSignedCertificateAndGenerateWalletTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.validateNetworkTriggerInput">ValidateNetworkTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate">CaSignedCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.chunks">Chunks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName">ClusterCertificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger">ConfigureGsmsTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage">ConfigureGsmsTriggerIsLatestGsmImage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames">ConfigureGsmsTriggerOldGsmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger">ConfigureShardingTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType">DbDeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger">DownloadGsmCertificateSigningRequestTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger">FetchConnectionStringTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger">GenerateGsmCertificateSigningRequestTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword">GenerateWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger">GenerateWalletTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortTls">ListenerPortTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortLocal">OnsPortLocal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortRemote">OnsPortRemote</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationMethod">ReplicationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationUnit">ReplicationUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardingMethod">ShardingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger">StartDatabaseTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger">StopDatabaseTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger">UploadSignedCertificateAndGenerateWalletTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger">ValidateNetworkTrigger</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CatalogDetails`<sup>Required</sup> <a name="CatalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.catalogDetails"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList CatalogDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a>

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.connectionStrings"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList">GloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a>

---

##### `Gsms`<sup>Required</sup> <a name="Gsms" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.gsms"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseGsmsList Gsms { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList">GloballyDistributedDatabaseShardedDatabaseGsmsList</a>

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.patchOperations"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabasePatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList">GloballyDistributedDatabaseShardedDatabasePatchOperationsList</a>

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `ShardDetails`<sup>Required</sup> <a name="ShardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardDetails"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseShardDetailsList ShardDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList">GloballyDistributedDatabaseShardedDatabaseShardDetailsList</a>

---

##### `ShardedDatabaseId`<sup>Required</sup> <a name="ShardedDatabaseId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId"></a>

```csharp
public string ShardedDatabaseId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeouts"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference">GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `CaSignedCertificateInput`<sup>Optional</sup> <a name="CaSignedCertificateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.caSignedCertificateInput"></a>

```csharp
public string CaSignedCertificateInput { get; }
```

- *Type:* string

---

##### `CatalogDetailsInput`<sup>Optional</sup> <a name="CatalogDetailsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.catalogDetailsInput"></a>

```csharp
public object CatalogDetailsInput { get; }
```

- *Type:* object

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `ChunksInput`<sup>Optional</sup> <a name="ChunksInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.chunksInput"></a>

```csharp
public double ChunksInput { get; }
```

- *Type:* double

---

##### `ClusterCertificateCommonNameInput`<sup>Optional</sup> <a name="ClusterCertificateCommonNameInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonNameInput"></a>

```csharp
public string ClusterCertificateCommonNameInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigureGsmsTriggerInput`<sup>Optional</sup> <a name="ConfigureGsmsTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerInput"></a>

```csharp
public double ConfigureGsmsTriggerInput { get; }
```

- *Type:* double

---

##### `ConfigureGsmsTriggerIsLatestGsmImageInput`<sup>Optional</sup> <a name="ConfigureGsmsTriggerIsLatestGsmImageInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImageInput"></a>

```csharp
public object ConfigureGsmsTriggerIsLatestGsmImageInput { get; }
```

- *Type:* object

---

##### `ConfigureGsmsTriggerOldGsmNamesInput`<sup>Optional</sup> <a name="ConfigureGsmsTriggerOldGsmNamesInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNamesInput"></a>

```csharp
public string[] ConfigureGsmsTriggerOldGsmNamesInput { get; }
```

- *Type:* string[]

---

##### `ConfigureShardingTriggerInput`<sup>Optional</sup> <a name="ConfigureShardingTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureShardingTriggerInput"></a>

```csharp
public double ConfigureShardingTriggerInput { get; }
```

- *Type:* double

---

##### `DbDeploymentTypeInput`<sup>Optional</sup> <a name="DbDeploymentTypeInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbDeploymentTypeInput"></a>

```csharp
public string DbDeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbWorkloadInput"></a>

```csharp
public string DbWorkloadInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DownloadGsmCertificateSigningRequestTriggerInput`<sup>Optional</sup> <a name="DownloadGsmCertificateSigningRequestTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTriggerInput"></a>

```csharp
public double DownloadGsmCertificateSigningRequestTriggerInput { get; }
```

- *Type:* double

---

##### `FetchConnectionStringTriggerInput`<sup>Optional</sup> <a name="FetchConnectionStringTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTriggerInput"></a>

```csharp
public double FetchConnectionStringTriggerInput { get; }
```

- *Type:* double

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateGsmCertificateSigningRequestTriggerInput`<sup>Optional</sup> <a name="GenerateGsmCertificateSigningRequestTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTriggerInput"></a>

```csharp
public double GenerateGsmCertificateSigningRequestTriggerInput { get; }
```

- *Type:* double

---

##### `GenerateWalletPasswordInput`<sup>Optional</sup> <a name="GenerateWalletPasswordInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletPasswordInput"></a>

```csharp
public string GenerateWalletPasswordInput { get; }
```

- *Type:* string

---

##### `GenerateWalletTriggerInput`<sup>Optional</sup> <a name="GenerateWalletTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletTriggerInput"></a>

```csharp
public double GenerateWalletTriggerInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortInput"></a>

```csharp
public double ListenerPortInput { get; }
```

- *Type:* double

---

##### `ListenerPortTlsInput`<sup>Optional</sup> <a name="ListenerPortTlsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortTlsInput"></a>

```csharp
public double ListenerPortTlsInput { get; }
```

- *Type:* double

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.ncharacterSetInput"></a>

```csharp
public string NcharacterSetInput { get; }
```

- *Type:* string

---

##### `OnsPortLocalInput`<sup>Optional</sup> <a name="OnsPortLocalInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortLocalInput"></a>

```csharp
public double OnsPortLocalInput { get; }
```

- *Type:* double

---

##### `OnsPortRemoteInput`<sup>Optional</sup> <a name="OnsPortRemoteInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortRemoteInput"></a>

```csharp
public double OnsPortRemoteInput { get; }
```

- *Type:* double

---

##### `PatchOperationsInput`<sup>Optional</sup> <a name="PatchOperationsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.patchOperationsInput"></a>

```csharp
public object PatchOperationsInput { get; }
```

- *Type:* object

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `ReplicationFactorInput`<sup>Optional</sup> <a name="ReplicationFactorInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationFactorInput"></a>

```csharp
public double ReplicationFactorInput { get; }
```

- *Type:* double

---

##### `ReplicationMethodInput`<sup>Optional</sup> <a name="ReplicationMethodInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationMethodInput"></a>

```csharp
public string ReplicationMethodInput { get; }
```

- *Type:* string

---

##### `ReplicationUnitInput`<sup>Optional</sup> <a name="ReplicationUnitInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationUnitInput"></a>

```csharp
public double ReplicationUnitInput { get; }
```

- *Type:* double

---

##### `ShardDetailsInput`<sup>Optional</sup> <a name="ShardDetailsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardDetailsInput"></a>

```csharp
public object ShardDetailsInput { get; }
```

- *Type:* object

---

##### `ShardingMethodInput`<sup>Optional</sup> <a name="ShardingMethodInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardingMethodInput"></a>

```csharp
public string ShardingMethodInput { get; }
```

- *Type:* string

---

##### `StartDatabaseTriggerInput`<sup>Optional</sup> <a name="StartDatabaseTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.startDatabaseTriggerInput"></a>

```csharp
public double StartDatabaseTriggerInput { get; }
```

- *Type:* double

---

##### `StopDatabaseTriggerInput`<sup>Optional</sup> <a name="StopDatabaseTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTriggerInput"></a>

```csharp
public double StopDatabaseTriggerInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UploadSignedCertificateAndGenerateWalletTriggerInput`<sup>Optional</sup> <a name="UploadSignedCertificateAndGenerateWalletTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTriggerInput"></a>

```csharp
public double UploadSignedCertificateAndGenerateWalletTriggerInput { get; }
```

- *Type:* double

---

##### `ValidateNetworkTriggerInput`<sup>Optional</sup> <a name="ValidateNetworkTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.validateNetworkTriggerInput"></a>

```csharp
public double ValidateNetworkTriggerInput { get; }
```

- *Type:* double

---

##### `CaSignedCertificate`<sup>Required</sup> <a name="CaSignedCertificate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate"></a>

```csharp
public string CaSignedCertificate { get; }
```

- *Type:* string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `Chunks`<sup>Required</sup> <a name="Chunks" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.chunks"></a>

```csharp
public double Chunks { get; }
```

- *Type:* double

---

##### `ClusterCertificateCommonName`<sup>Required</sup> <a name="ClusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName"></a>

```csharp
public string ClusterCertificateCommonName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigureGsmsTrigger`<sup>Required</sup> <a name="ConfigureGsmsTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger"></a>

```csharp
public double ConfigureGsmsTrigger { get; }
```

- *Type:* double

---

##### `ConfigureGsmsTriggerIsLatestGsmImage`<sup>Required</sup> <a name="ConfigureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage"></a>

```csharp
public object ConfigureGsmsTriggerIsLatestGsmImage { get; }
```

- *Type:* object

---

##### `ConfigureGsmsTriggerOldGsmNames`<sup>Required</sup> <a name="ConfigureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames"></a>

```csharp
public string[] ConfigureGsmsTriggerOldGsmNames { get; }
```

- *Type:* string[]

---

##### `ConfigureShardingTrigger`<sup>Required</sup> <a name="ConfigureShardingTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger"></a>

```csharp
public double ConfigureShardingTrigger { get; }
```

- *Type:* double

---

##### `DbDeploymentType`<sup>Required</sup> <a name="DbDeploymentType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType"></a>

```csharp
public string DbDeploymentType { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DownloadGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="DownloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger"></a>

```csharp
public double DownloadGsmCertificateSigningRequestTrigger { get; }
```

- *Type:* double

---

##### `FetchConnectionStringTrigger`<sup>Required</sup> <a name="FetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger"></a>

```csharp
public double FetchConnectionStringTrigger { get; }
```

- *Type:* double

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="GenerateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger"></a>

```csharp
public double GenerateGsmCertificateSigningRequestTrigger { get; }
```

- *Type:* double

---

##### `GenerateWalletPassword`<sup>Required</sup> <a name="GenerateWalletPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword"></a>

```csharp
public string GenerateWalletPassword { get; }
```

- *Type:* string

---

##### `GenerateWalletTrigger`<sup>Required</sup> <a name="GenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger"></a>

```csharp
public double GenerateWalletTrigger { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `ListenerPortTls`<sup>Required</sup> <a name="ListenerPortTls" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortTls"></a>

```csharp
public double ListenerPortTls { get; }
```

- *Type:* double

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `OnsPortLocal`<sup>Required</sup> <a name="OnsPortLocal" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortLocal"></a>

```csharp
public double OnsPortLocal { get; }
```

- *Type:* double

---

##### `OnsPortRemote`<sup>Required</sup> <a name="OnsPortRemote" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortRemote"></a>

```csharp
public double OnsPortRemote { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; }
```

- *Type:* double

---

##### `ReplicationMethod`<sup>Required</sup> <a name="ReplicationMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationMethod"></a>

```csharp
public string ReplicationMethod { get; }
```

- *Type:* string

---

##### `ReplicationUnit`<sup>Required</sup> <a name="ReplicationUnit" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationUnit"></a>

```csharp
public double ReplicationUnit { get; }
```

- *Type:* double

---

##### `ShardingMethod`<sup>Required</sup> <a name="ShardingMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardingMethod"></a>

```csharp
public string ShardingMethod { get; }
```

- *Type:* string

---

##### `StartDatabaseTrigger`<sup>Required</sup> <a name="StartDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger"></a>

```csharp
public double StartDatabaseTrigger { get; }
```

- *Type:* double

---

##### `StopDatabaseTrigger`<sup>Required</sup> <a name="StopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger"></a>

```csharp
public double StopDatabaseTrigger { get; }
```

- *Type:* double

---

##### `UploadSignedCertificateAndGenerateWalletTrigger`<sup>Required</sup> <a name="UploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger"></a>

```csharp
public double UploadSignedCertificateAndGenerateWalletTrigger { get; }
```

- *Type:* double

---

##### `ValidateNetworkTrigger`<sup>Required</sup> <a name="ValidateNetworkTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger"></a>

```csharp
public double ValidateNetworkTrigger { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GloballyDistributedDatabaseShardedDatabaseCatalogDetails <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseCatalogDetails {
    string AdminPassword,
    string CloudAutonomousVmClusterId,
    double ComputeCount,
    double DataStorageSizeInGbs,
    object IsAutoScalingEnabled,
    GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails EncryptionKeyDetails = null,
    string PeerCloudAutonomousVmClusterId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.computeCount">ComputeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.encryptionKeyDetails">EncryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | encryption_key_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}.

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.cloudAutonomousVmClusterId"></a>

```csharp
public string CloudAutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}.

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}.

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}.

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.isAutoScalingEnabled"></a>

```csharp
public object IsAutoScalingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}.

---

##### `EncryptionKeyDetails`<sup>Optional</sup> <a name="EncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.encryptionKeyDetails"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails EncryptionKeyDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

encryption_key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#encryption_key_details GloballyDistributedDatabaseShardedDatabase#encryption_key_details}

---

##### `PeerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.peerCloudAutonomousVmClusterId"></a>

```csharp
public string PeerCloudAutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}.

---

### GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails {
    string KmsKeyId,
    string VaultId,
    string KmsKeyVersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}. |

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}.

---

### GloballyDistributedDatabaseShardedDatabaseConfig <a name="GloballyDistributedDatabaseShardedDatabaseConfig" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object CatalogDetails,
    string CharacterSet,
    string CompartmentId,
    string DbDeploymentType,
    string DbVersion,
    string DbWorkload,
    string DisplayName,
    double ListenerPort,
    double ListenerPortTls,
    string NcharacterSet,
    double OnsPortLocal,
    double OnsPortRemote,
    string Prefix,
    object ShardDetails,
    string ShardingMethod,
    string CaSignedCertificate = null,
    double Chunks = null,
    string ClusterCertificateCommonName = null,
    double ConfigureGsmsTrigger = null,
    object ConfigureGsmsTriggerIsLatestGsmImage = null,
    string[] ConfigureGsmsTriggerOldGsmNames = null,
    double ConfigureShardingTrigger = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    double DownloadGsmCertificateSigningRequestTrigger = null,
    double FetchConnectionStringTrigger = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    double GenerateGsmCertificateSigningRequestTrigger = null,
    string GenerateWalletPassword = null,
    double GenerateWalletTrigger = null,
    string Id = null,
    object PatchOperations = null,
    double ReplicationFactor = null,
    string ReplicationMethod = null,
    double ReplicationUnit = null,
    double StartDatabaseTrigger = null,
    double StopDatabaseTrigger = null,
    GloballyDistributedDatabaseShardedDatabaseTimeouts Timeouts = null,
    double UploadSignedCertificateAndGenerateWalletTrigger = null,
    double ValidateNetworkTrigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.catalogDetails">CatalogDetails</a></code> | <code>object</code> | catalog_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.characterSet">CharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#character_set GloballyDistributedDatabaseShardedDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compartment_id GloballyDistributedDatabaseShardedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbDeploymentType">DbDeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_deployment_type GloballyDistributedDatabaseShardedDatabase#db_deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbVersion">DbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_version GloballyDistributedDatabaseShardedDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_workload GloballyDistributedDatabaseShardedDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#display_name GloballyDistributedDatabaseShardedDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.listenerPort">ListenerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port GloballyDistributedDatabaseShardedDatabase#listener_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.listenerPortTls">ListenerPortTls</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port_tls GloballyDistributedDatabaseShardedDatabase#listener_port_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ncharacter_set GloballyDistributedDatabaseShardedDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.onsPortLocal">OnsPortLocal</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_local GloballyDistributedDatabaseShardedDatabase#ons_port_local}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.onsPortRemote">OnsPortRemote</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_remote GloballyDistributedDatabaseShardedDatabase#ons_port_remote}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#prefix GloballyDistributedDatabaseShardedDatabase#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.shardDetails">ShardDetails</a></code> | <code>object</code> | shard_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.shardingMethod">ShardingMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#sharding_method GloballyDistributedDatabaseShardedDatabase#sharding_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.caSignedCertificate">CaSignedCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ca_signed_certificate GloballyDistributedDatabaseShardedDatabase#ca_signed_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.chunks">Chunks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#chunks GloballyDistributedDatabaseShardedDatabase#chunks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.clusterCertificateCommonName">ClusterCertificateCommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cluster_certificate_common_name GloballyDistributedDatabaseShardedDatabase#cluster_certificate_common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTrigger">ConfigureGsmsTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTriggerIsLatestGsmImage">ConfigureGsmsTriggerIsLatestGsmImage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_is_latest_gsm_image GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_is_latest_gsm_image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTriggerOldGsmNames">ConfigureGsmsTriggerOldGsmNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_old_gsm_names GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_old_gsm_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureShardingTrigger">ConfigureShardingTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_sharding_trigger GloballyDistributedDatabaseShardedDatabase#configure_sharding_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#defined_tags GloballyDistributedDatabaseShardedDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.downloadGsmCertificateSigningRequestTrigger">DownloadGsmCertificateSigningRequestTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#download_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#download_gsm_certificate_signing_request_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.fetchConnectionStringTrigger">FetchConnectionStringTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#get_connection_string_trigger GloballyDistributedDatabaseShardedDatabase#get_connection_string_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#freeform_tags GloballyDistributedDatabaseShardedDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateGsmCertificateSigningRequestTrigger">GenerateGsmCertificateSigningRequestTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#generate_gsm_certificate_signing_request_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateWalletPassword">GenerateWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_password GloballyDistributedDatabaseShardedDatabase#generate_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateWalletTrigger">GenerateWalletTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#generate_wallet_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#id GloballyDistributedDatabaseShardedDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.patchOperations">PatchOperations</a></code> | <code>object</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_factor GloballyDistributedDatabaseShardedDatabase#replication_factor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationMethod">ReplicationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_method GloballyDistributedDatabaseShardedDatabase#replication_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationUnit">ReplicationUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_unit GloballyDistributedDatabaseShardedDatabase#replication_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.startDatabaseTrigger">StartDatabaseTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#start_database_trigger GloballyDistributedDatabaseShardedDatabase#start_database_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.stopDatabaseTrigger">StopDatabaseTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#stop_database_trigger GloballyDistributedDatabaseShardedDatabase#stop_database_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.uploadSignedCertificateAndGenerateWalletTrigger">UploadSignedCertificateAndGenerateWalletTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#upload_signed_certificate_and_generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#upload_signed_certificate_and_generate_wallet_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.validateNetworkTrigger">ValidateNetworkTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#validate_network_trigger GloballyDistributedDatabaseShardedDatabase#validate_network_trigger}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CatalogDetails`<sup>Required</sup> <a name="CatalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.catalogDetails"></a>

```csharp
public object CatalogDetails { get; set; }
```

- *Type:* object

catalog_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#catalog_details GloballyDistributedDatabaseShardedDatabase#catalog_details}

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#character_set GloballyDistributedDatabaseShardedDatabase#character_set}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compartment_id GloballyDistributedDatabaseShardedDatabase#compartment_id}.

---

##### `DbDeploymentType`<sup>Required</sup> <a name="DbDeploymentType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbDeploymentType"></a>

```csharp
public string DbDeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_deployment_type GloballyDistributedDatabaseShardedDatabase#db_deployment_type}.

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_version GloballyDistributedDatabaseShardedDatabase#db_version}.

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_workload GloballyDistributedDatabaseShardedDatabase#db_workload}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#display_name GloballyDistributedDatabaseShardedDatabase#display_name}.

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.listenerPort"></a>

```csharp
public double ListenerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port GloballyDistributedDatabaseShardedDatabase#listener_port}.

---

##### `ListenerPortTls`<sup>Required</sup> <a name="ListenerPortTls" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.listenerPortTls"></a>

```csharp
public double ListenerPortTls { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port_tls GloballyDistributedDatabaseShardedDatabase#listener_port_tls}.

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ncharacter_set GloballyDistributedDatabaseShardedDatabase#ncharacter_set}.

---

##### `OnsPortLocal`<sup>Required</sup> <a name="OnsPortLocal" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.onsPortLocal"></a>

```csharp
public double OnsPortLocal { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_local GloballyDistributedDatabaseShardedDatabase#ons_port_local}.

---

##### `OnsPortRemote`<sup>Required</sup> <a name="OnsPortRemote" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.onsPortRemote"></a>

```csharp
public double OnsPortRemote { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_remote GloballyDistributedDatabaseShardedDatabase#ons_port_remote}.

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#prefix GloballyDistributedDatabaseShardedDatabase#prefix}.

---

##### `ShardDetails`<sup>Required</sup> <a name="ShardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.shardDetails"></a>

```csharp
public object ShardDetails { get; set; }
```

- *Type:* object

shard_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#shard_details GloballyDistributedDatabaseShardedDatabase#shard_details}

---

##### `ShardingMethod`<sup>Required</sup> <a name="ShardingMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.shardingMethod"></a>

```csharp
public string ShardingMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#sharding_method GloballyDistributedDatabaseShardedDatabase#sharding_method}.

---

##### `CaSignedCertificate`<sup>Optional</sup> <a name="CaSignedCertificate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.caSignedCertificate"></a>

```csharp
public string CaSignedCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ca_signed_certificate GloballyDistributedDatabaseShardedDatabase#ca_signed_certificate}.

---

##### `Chunks`<sup>Optional</sup> <a name="Chunks" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.chunks"></a>

```csharp
public double Chunks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#chunks GloballyDistributedDatabaseShardedDatabase#chunks}.

---

##### `ClusterCertificateCommonName`<sup>Optional</sup> <a name="ClusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.clusterCertificateCommonName"></a>

```csharp
public string ClusterCertificateCommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cluster_certificate_common_name GloballyDistributedDatabaseShardedDatabase#cluster_certificate_common_name}.

---

##### `ConfigureGsmsTrigger`<sup>Optional</sup> <a name="ConfigureGsmsTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTrigger"></a>

```csharp
public double ConfigureGsmsTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger}.

---

##### `ConfigureGsmsTriggerIsLatestGsmImage`<sup>Optional</sup> <a name="ConfigureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTriggerIsLatestGsmImage"></a>

```csharp
public object ConfigureGsmsTriggerIsLatestGsmImage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_is_latest_gsm_image GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_is_latest_gsm_image}.

---

##### `ConfigureGsmsTriggerOldGsmNames`<sup>Optional</sup> <a name="ConfigureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTriggerOldGsmNames"></a>

```csharp
public string[] ConfigureGsmsTriggerOldGsmNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_old_gsm_names GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_old_gsm_names}.

---

##### `ConfigureShardingTrigger`<sup>Optional</sup> <a name="ConfigureShardingTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureShardingTrigger"></a>

```csharp
public double ConfigureShardingTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_sharding_trigger GloballyDistributedDatabaseShardedDatabase#configure_sharding_trigger}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#defined_tags GloballyDistributedDatabaseShardedDatabase#defined_tags}.

---

##### `DownloadGsmCertificateSigningRequestTrigger`<sup>Optional</sup> <a name="DownloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.downloadGsmCertificateSigningRequestTrigger"></a>

```csharp
public double DownloadGsmCertificateSigningRequestTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#download_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#download_gsm_certificate_signing_request_trigger}.

---

##### `FetchConnectionStringTrigger`<sup>Optional</sup> <a name="FetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.fetchConnectionStringTrigger"></a>

```csharp
public double FetchConnectionStringTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#get_connection_string_trigger GloballyDistributedDatabaseShardedDatabase#get_connection_string_trigger}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#freeform_tags GloballyDistributedDatabaseShardedDatabase#freeform_tags}.

---

##### `GenerateGsmCertificateSigningRequestTrigger`<sup>Optional</sup> <a name="GenerateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateGsmCertificateSigningRequestTrigger"></a>

```csharp
public double GenerateGsmCertificateSigningRequestTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#generate_gsm_certificate_signing_request_trigger}.

---

##### `GenerateWalletPassword`<sup>Optional</sup> <a name="GenerateWalletPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateWalletPassword"></a>

```csharp
public string GenerateWalletPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_password GloballyDistributedDatabaseShardedDatabase#generate_wallet_password}.

---

##### `GenerateWalletTrigger`<sup>Optional</sup> <a name="GenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateWalletTrigger"></a>

```csharp
public double GenerateWalletTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#generate_wallet_trigger}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#id GloballyDistributedDatabaseShardedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PatchOperations`<sup>Optional</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.patchOperations"></a>

```csharp
public object PatchOperations { get; set; }
```

- *Type:* object

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#patch_operations GloballyDistributedDatabaseShardedDatabase#patch_operations}

---

##### `ReplicationFactor`<sup>Optional</sup> <a name="ReplicationFactor" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_factor GloballyDistributedDatabaseShardedDatabase#replication_factor}.

---

##### `ReplicationMethod`<sup>Optional</sup> <a name="ReplicationMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationMethod"></a>

```csharp
public string ReplicationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_method GloballyDistributedDatabaseShardedDatabase#replication_method}.

---

##### `ReplicationUnit`<sup>Optional</sup> <a name="ReplicationUnit" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationUnit"></a>

```csharp
public double ReplicationUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_unit GloballyDistributedDatabaseShardedDatabase#replication_unit}.

---

##### `StartDatabaseTrigger`<sup>Optional</sup> <a name="StartDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.startDatabaseTrigger"></a>

```csharp
public double StartDatabaseTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#start_database_trigger GloballyDistributedDatabaseShardedDatabase#start_database_trigger}.

---

##### `StopDatabaseTrigger`<sup>Optional</sup> <a name="StopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.stopDatabaseTrigger"></a>

```csharp
public double StopDatabaseTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#stop_database_trigger GloballyDistributedDatabaseShardedDatabase#stop_database_trigger}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.timeouts"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#timeouts GloballyDistributedDatabaseShardedDatabase#timeouts}

---

##### `UploadSignedCertificateAndGenerateWalletTrigger`<sup>Optional</sup> <a name="UploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.uploadSignedCertificateAndGenerateWalletTrigger"></a>

```csharp
public double UploadSignedCertificateAndGenerateWalletTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#upload_signed_certificate_and_generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#upload_signed_certificate_and_generate_wallet_trigger}.

---

##### `ValidateNetworkTrigger`<sup>Optional</sup> <a name="ValidateNetworkTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.validateNetworkTrigger"></a>

```csharp
public double ValidateNetworkTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#validate_network_trigger GloballyDistributedDatabaseShardedDatabase#validate_network_trigger}.

---

### GloballyDistributedDatabaseShardedDatabaseConnectionStrings <a name="GloballyDistributedDatabaseShardedDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseConnectionStrings {

};
```


### GloballyDistributedDatabaseShardedDatabaseGsms <a name="GloballyDistributedDatabaseShardedDatabaseGsms" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseGsms {

};
```


### GloballyDistributedDatabaseShardedDatabasePatchOperations <a name="GloballyDistributedDatabaseShardedDatabasePatchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabasePatchOperations {
    string Operation,
    string Selection,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.operation">Operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#operation GloballyDistributedDatabaseShardedDatabase#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.selection">Selection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#selection GloballyDistributedDatabaseShardedDatabase#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#value GloballyDistributedDatabaseShardedDatabase#value}. |

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#operation GloballyDistributedDatabaseShardedDatabase#operation}.

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.selection"></a>

```csharp
public string Selection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#selection GloballyDistributedDatabaseShardedDatabase#selection}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#value GloballyDistributedDatabaseShardedDatabase#value}.

---

### GloballyDistributedDatabaseShardedDatabaseShardDetails <a name="GloballyDistributedDatabaseShardedDatabaseShardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseShardDetails {
    string AdminPassword,
    string CloudAutonomousVmClusterId,
    double ComputeCount,
    double DataStorageSizeInGbs,
    object IsAutoScalingEnabled,
    GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails EncryptionKeyDetails = null,
    string PeerCloudAutonomousVmClusterId = null,
    string ShardSpace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.computeCount">ComputeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.encryptionKeyDetails">EncryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | encryption_key_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.shardSpace">ShardSpace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#shard_space GloballyDistributedDatabaseShardedDatabase#shard_space}. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}.

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.cloudAutonomousVmClusterId"></a>

```csharp
public string CloudAutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}.

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}.

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}.

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.isAutoScalingEnabled"></a>

```csharp
public object IsAutoScalingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}.

---

##### `EncryptionKeyDetails`<sup>Optional</sup> <a name="EncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.encryptionKeyDetails"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails EncryptionKeyDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

encryption_key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#encryption_key_details GloballyDistributedDatabaseShardedDatabase#encryption_key_details}

---

##### `PeerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.peerCloudAutonomousVmClusterId"></a>

```csharp
public string PeerCloudAutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}.

---

##### `ShardSpace`<sup>Optional</sup> <a name="ShardSpace" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.shardSpace"></a>

```csharp
public string ShardSpace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#shard_space GloballyDistributedDatabaseShardedDatabase#shard_space}.

---

### GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails <a name="GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails {
    string KmsKeyId,
    string VaultId,
    string KmsKeyVersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}. |

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}.

---

### GloballyDistributedDatabaseShardedDatabaseTimeouts <a name="GloballyDistributedDatabaseShardedDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#create GloballyDistributedDatabaseShardedDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#delete GloballyDistributedDatabaseShardedDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#update GloballyDistributedDatabaseShardedDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#create GloballyDistributedDatabaseShardedDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#delete GloballyDistributedDatabaseShardedDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#update GloballyDistributedDatabaseShardedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---


### GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get"></a>

```csharp
private GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.putEncryptionKeyDetails">PutEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resetEncryptionKeyDetails">ResetEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resetPeerCloudAutonomousVmClusterId">ResetPeerCloudAutonomousVmClusterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionKeyDetails` <a name="PutEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.putEncryptionKeyDetails"></a>

```csharp
private void PutEncryptionKeyDetails(GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.putEncryptionKeyDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---

##### `ResetEncryptionKeyDetails` <a name="ResetEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resetEncryptionKeyDetails"></a>

```csharp
private void ResetEncryptionKeyDetails()
```

##### `ResetPeerCloudAutonomousVmClusterId` <a name="ResetPeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resetPeerCloudAutonomousVmClusterId"></a>

```csharp
private void ResetPeerCloudAutonomousVmClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId">ContainerDatabaseParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails">EncryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup">ShardGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterIdInput">CloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbsInput">DataStorageSizeInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetailsInput">EncryptionKeyDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabledInput">IsAutoScalingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterIdInput">PeerCloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId"></a>

```csharp
public string ContainerDatabaseId { get; }
```

- *Type:* string

---

##### `ContainerDatabaseParentId`<sup>Required</sup> <a name="ContainerDatabaseParentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId"></a>

```csharp
public string ContainerDatabaseParentId { get; }
```

- *Type:* string

---

##### `EncryptionKeyDetails`<sup>Required</sup> <a name="EncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference EncryptionKeyDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShardGroup`<sup>Required</sup> <a name="ShardGroup" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup"></a>

```csharp
public string ShardGroup { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId"></a>

```csharp
public string SupportingResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires"></a>

```csharp
public string TimeSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `CloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="CloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterIdInput"></a>

```csharp
public string CloudAutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGbsInput`<sup>Optional</sup> <a name="DataStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbsInput"></a>

```csharp
public double DataStorageSizeInGbsInput { get; }
```

- *Type:* double

---

##### `EncryptionKeyDetailsInput`<sup>Optional</sup> <a name="EncryptionKeyDetailsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetailsInput"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails EncryptionKeyDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---

##### `IsAutoScalingEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabledInput"></a>

```csharp
public object IsAutoScalingEnabledInput { get; }
```

- *Type:* object

---

##### `PeerCloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="PeerCloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterIdInput"></a>

```csharp
public string PeerCloudAutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```csharp
public string CloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public object IsAutoScalingEnabled { get; }
```

- *Type:* object

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```csharp
public string PeerCloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GloballyDistributedDatabaseShardedDatabaseConnectionStringsList <a name="GloballyDistributedDatabaseShardedDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get"></a>

```csharp
private GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStrings">GloballyDistributedDatabaseShardedDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStrings">GloballyDistributedDatabaseShardedDatabaseConnectionStrings</a>

---


### GloballyDistributedDatabaseShardedDatabaseGsmsList <a name="GloballyDistributedDatabaseShardedDatabaseGsmsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseGsmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.get"></a>

```csharp
private GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsms">GloballyDistributedDatabaseShardedDatabaseGsms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId"></a>

```csharp
public string SupportingResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires"></a>

```csharp
public string TimeSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseGsms InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsms">GloballyDistributedDatabaseShardedDatabaseGsms</a>

---


### GloballyDistributedDatabaseShardedDatabasePatchOperationsList <a name="GloballyDistributedDatabaseShardedDatabasePatchOperationsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabasePatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.get"></a>

```csharp
private GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference <a name="GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selectionInput">SelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `SelectionInput`<sup>Optional</sup> <a name="SelectionInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selectionInput"></a>

```csharp
public string SelectionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---


### GloballyDistributedDatabaseShardedDatabaseShardDetailsList <a name="GloballyDistributedDatabaseShardedDatabaseShardDetailsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseShardDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.get"></a>

```csharp
private GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.putEncryptionKeyDetails">PutEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetEncryptionKeyDetails">ResetEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetPeerCloudAutonomousVmClusterId">ResetPeerCloudAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetShardSpace">ResetShardSpace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionKeyDetails` <a name="PutEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.putEncryptionKeyDetails"></a>

```csharp
private void PutEncryptionKeyDetails(GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.putEncryptionKeyDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---

##### `ResetEncryptionKeyDetails` <a name="ResetEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetEncryptionKeyDetails"></a>

```csharp
private void ResetEncryptionKeyDetails()
```

##### `ResetPeerCloudAutonomousVmClusterId` <a name="ResetPeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetPeerCloudAutonomousVmClusterId"></a>

```csharp
private void ResetPeerCloudAutonomousVmClusterId()
```

##### `ResetShardSpace` <a name="ResetShardSpace" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetShardSpace"></a>

```csharp
private void ResetShardSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId">ContainerDatabaseParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails">EncryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup">ShardGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterIdInput">CloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbsInput">DataStorageSizeInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetailsInput">EncryptionKeyDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabledInput">IsAutoScalingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterIdInput">PeerCloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpaceInput">ShardSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace">ShardSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId"></a>

```csharp
public string ContainerDatabaseId { get; }
```

- *Type:* string

---

##### `ContainerDatabaseParentId`<sup>Required</sup> <a name="ContainerDatabaseParentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId"></a>

```csharp
public string ContainerDatabaseParentId { get; }
```

- *Type:* string

---

##### `EncryptionKeyDetails`<sup>Required</sup> <a name="EncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference EncryptionKeyDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShardGroup`<sup>Required</sup> <a name="ShardGroup" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup"></a>

```csharp
public string ShardGroup { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId"></a>

```csharp
public string SupportingResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires"></a>

```csharp
public string TimeSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `CloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="CloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterIdInput"></a>

```csharp
public string CloudAutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGbsInput`<sup>Optional</sup> <a name="DataStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbsInput"></a>

```csharp
public double DataStorageSizeInGbsInput { get; }
```

- *Type:* double

---

##### `EncryptionKeyDetailsInput`<sup>Optional</sup> <a name="EncryptionKeyDetailsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetailsInput"></a>

```csharp
public GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails EncryptionKeyDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---

##### `IsAutoScalingEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabledInput"></a>

```csharp
public object IsAutoScalingEnabledInput { get; }
```

- *Type:* object

---

##### `PeerCloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="PeerCloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterIdInput"></a>

```csharp
public string PeerCloudAutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `ShardSpaceInput`<sup>Optional</sup> <a name="ShardSpaceInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpaceInput"></a>

```csharp
public string ShardSpaceInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```csharp
public string CloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public object IsAutoScalingEnabled { get; }
```

- *Type:* object

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```csharp
public string PeerCloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `ShardSpace`<sup>Required</sup> <a name="ShardSpace" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace"></a>

```csharp
public string ShardSpace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



